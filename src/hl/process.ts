import { Options, Renderer, LanguageName, KeywordGroup, CompiledKeywords, CompiledSyntaxDef, CompiledLanguageDef, Result } from './types';
import { getLanguage, listLanguages } from './languages';

/* Utility functions */

function testRe(re: RegExp | undefined, lexeme: string): boolean {
    const match = re && re.exec(lexeme);
    return match && match.index === 0 || false;
}

export interface Content<Output> {
    className?: string;
    content: Output[];
}

/*
Core highlighting function. Accepts a language name, or an alias, and a
string with the code to highlight. Returns an object with the following
properties:
- relevance (int)
- value (an HTML string with highlighting markup)
*/
export function highlight<Output>(options: Options, render: Renderer<Output>, lang: LanguageName, value: string, ignore_illegals?: boolean, continuation?: CompiledLanguageDef): Result<Output> {
    const output: Content<Output>[] = [{ content: [] }];

    function outContent(content: Output) {
        const cont = output[0].content;
        // optimization for sequential strings outputs
        if (typeof content == 'string' && cont.length &&
            typeof cont[cont.length - 1] == 'string') {
            (cont[cont.length - 1] as any as string) += content as any as string;
        } else {
            cont.push(content);
        }
    }

    function outText(text: string) {
        outContent(render.text(text));
    };

    function openSpan(className: string, noPrefix?: boolean) {
        if (!noPrefix) className = options.classPrefix + className;
        output.unshift({ className, content: [] });
    };

    function wrapSpan(className: string) {
        className = options.classPrefix + className;
        output.push({ className, content: [] });
    };

    function closeSpan() {
        if (output.length < 2) throw "unbalanced";
        const { className, content } = output.shift() as Content<Output>;
        const output_ = render.join(content);
        outContent(className ? render.wrap(className, output_) : output_);
    };

    function endOfMode(mode: CompiledSyntaxDef, lexeme: string): CompiledSyntaxDef | undefined {
        if (testRe(mode.endRe, lexeme)) {
            for (; mode.endsParent && mode.parent; mode = mode.parent);
            return mode;
        }

        if (mode.endsWithParent && mode.parent) {
            return endOfMode(mode.parent, lexeme);
        }
    }

    function processKeywords() {
        if (!top.keywords) {
            outText(mode_buffer);
            return;
        }

        let last_index = 0;
        top.lexemesRe.lastIndex = 0;
        let match = top.lexemesRe.exec(mode_buffer);

        while (match) {
            outText(mode_buffer.substring(last_index, match.index));

            // match keyword
            const match_str = (language as CompiledLanguageDef).case_insensitive ?
                match[0].toLowerCase() : match[0] as KeywordGroup;
            const keyword_match = (top.keywords as CompiledKeywords).hasOwnProperty(match_str) &&
                (top.keywords as CompiledKeywords)[match_str as KeywordGroup];

            if (keyword_match) {
                relevance += keyword_match[1];
                openSpan(keyword_match[0]);
                outText(match[0]);
                closeSpan();
            } else {
                outText(match[0]);
            }
            last_index = top.lexemesRe.lastIndex;
            match = top.lexemesRe.exec(mode_buffer);
        }
        outText(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
        const explicit = typeof top.subLanguage == 'string';

        if (explicit && !getLanguage(top.subLanguage as LanguageName)) {
            outText(mode_buffer);
            return;
        }

        const result = explicit ?
            highlight(options, render, top.subLanguage as string, mode_buffer, true, continuations[top.subLanguage as string]) :
            highlightAuto(options, render, mode_buffer, top.subLanguage && top.subLanguage.length ? top.subLanguage as string[] : undefined);

        // Counting embedded language score towards the host language may be disabled
        // with zeroing the containing mode relevance. Usecase in point is Markdown that
        // allows XML everywhere and makes every XML snippet to have a much larger Markdown
        // score.
        if (top.relevance > 0) {
            relevance += result.relevance;
        }
        if (explicit && result.top) {
            continuations[top.subLanguage as string] = result.top;
        }
        openSpan(result.language as string, true);
        outContent(result.value);
        closeSpan();
    }

    function processBuffer() {
        if (top.subLanguage != null)
            processSubLanguage();
        else
            processKeywords();
        mode_buffer = '';
    }

    function startNewMode(mode: CompiledSyntaxDef) {
        if (mode.className) {
            openSpan(mode.className);
        }
        top = Object.create(mode, { parent: { value: top } });
    }

    function processLexeme(buffer: string, lexeme?: string): number {
        mode_buffer += buffer;

        if (lexeme == null) {
            processBuffer();
            return 0;
        }

        let new_mode: CompiledSyntaxDef | undefined;

        // subMode(top, lexeme)
        for (const sub of top.contains) {
            if (testRe(sub.beginRe, lexeme)) {
                new_mode = sub;
                break;
            }
        }

        if (new_mode) {
            if (new_mode.skip) {
                mode_buffer += lexeme;
            } else {
                if (new_mode.excludeBegin) {
                    mode_buffer += lexeme;
                }
                processBuffer();
                if (!new_mode.returnBegin && !new_mode.excludeBegin) {
                    mode_buffer = lexeme;
                }
            }

            startNewMode(new_mode/*, lexeme*/);

            return new_mode.returnBegin ? 0 : lexeme.length;
        }

        const end_mode = endOfMode(top, lexeme);

        if (end_mode) {
            const origin = top;

            if (origin.skip) {
                mode_buffer += lexeme;
            } else {
                if (!(origin.returnEnd || origin.excludeEnd)) {
                    mode_buffer += lexeme;
                }
                processBuffer();
                if (origin.excludeEnd) {
                    mode_buffer = lexeme;
                }
            }

            do {
                if (top.className) {
                    closeSpan();
                }

                if (!top.skip && !top.subLanguage) {
                    relevance += top.relevance;
                }

                top = top.parent as CompiledLanguageDef;
            } while (top !== end_mode.parent);

            if (end_mode.starts) {
                startNewMode(end_mode.starts/*, ''*/);
            }

            return origin.returnEnd ? 0 : lexeme.length;
        }

        // is illegal
        if (!ignore_illegals && testRe(top.illegalRe, lexeme)) {
            throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        }

        /*
        Parser should not reach this point as all types of lexemes should be caught
        earlier, but if it does due to some bug make sure it advances at least one
        character forward to prevent infinite looping.
        */
        mode_buffer += lexeme;
        return lexeme.length || 1;
    }

    const language: CompiledLanguageDef | undefined = getLanguage(lang);
    if (!language) throw new Error(`Unknown language: "${lang}"`);

    let top: CompiledLanguageDef = continuation || language;
    const continuations: Record<LanguageName, CompiledLanguageDef> = {}; // keep continuations for sub-languages
    let current: CompiledSyntaxDef | undefined;

    for (current = top; current && current !== language; current = current.parent) {
        if (current.className) {
            wrapSpan(current.className);
        }
    }

    let mode_buffer = '';
    let relevance = 0;

    try {
        let match, count, index = 0;

        while (true) {
            top.terminators.lastIndex = index;
            match = top.terminators.exec(value);
            if (!match) break;
            count = processLexeme(value.substring(index, match.index), match[0]);
            index = match.index + count;
        }

        processLexeme(value.substr(index));

        for (current = top; current.parent; current = current.parent) { // close dangling modes
            if (current.className) {
                closeSpan();
            }
        }

        if (output.length != 1) throw "unbalanced";
        const { className, content } = output[0];
        const output_ = render.join(content);
        const result = className ? render.wrap(className, output_) : output_;

        return {
            language: lang,
            relevance,
            value: result,
            top
        };
    } catch (e) {
        if (e.message && e.message.indexOf('Illegal') !== -1) {
            return {
                language: lang,
                relevance: 0,
                value: render.text(value)
            };
        } else {
            throw e;
        }
    }
}

/*
Highlighting with language detection. Accepts a string with the code to
highlight. Returns an object with the following properties:
- language (detected language)
- relevance (int)
- value (an HTML string with highlighting markup)
- second_best (object with the same structure for second-best heuristically
  detected language, may be absent)
*/
export function highlightAuto<Output>(options: Options, render: Renderer<Output>, text: string, languageSubset: LanguageName[] = options.languages || listLanguages()): Result<Output> {
    let result: Result<Output> = {
        language: '',
        relevance: 0,
        value: render.text(text)
    };

    let second_best: Result<Output> = result;
    const languages = languageSubset.filter(getLanguage);

    for (const lang of languages) {
        const current: Result<Output> = highlight(options, render, lang, text, false);

        if (current.relevance > second_best.relevance) {
            second_best = current;
        }
        if (current.relevance > result.relevance) {
            second_best = result;
            result = current;
        }
    }

    if (second_best.language) {
        result.second_best = second_best;
    }

    return result;
}

// Regular expressions used throughout the highlight.js library.
const fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

/*
Post-processing of the highlighted markup:
- replace TABs with something more useful
- replace real line-breaks with '<br>' for non-pre containers
*/
export function fixMarkup(options: Options, value: string) {
    return !(options.tabReplace || options.useBr)
        ? value
        : value.replace(fixMarkupRe, function(match, p1) {
            if (options.useBr && match === '\n') {
                return '<br>';
            } else if (options.tabReplace) {
                return p1.replace(/\t/g, options.tabReplace);
            }
            return '';
        });
}

const defaults: Options = {
    classPrefix: 'hljs-',
    tabReplace: undefined,
    useBr: false,
    languages: undefined,
};

export interface Highlighter<Output> {
    render: Renderer<Output>;
    options: Options;
}

export function init<Output>(render: Renderer<Output>, options: Partial<Options> = {}): Highlighter<Output> {
    return {
        render,
        options: { ...defaults, ...options }
    };
}

export function process<Output>({ render, options }: Highlighter<Output>, source: string, lang?: LanguageName | LanguageName[]): Result<Output> {
    return typeof lang == 'string' ? highlight(options, render, lang, source) :
        highlightAuto(options, render, source, lang);
}
