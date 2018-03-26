import { StringRegExp, LanguageDef, SyntaxDef, KeywordGroup, CompiledSyntaxDef, CompiledLanguageDef, CompiledKeywords } from './types';

function reStr(re: StringRegExp | undefined): string {
    return (re && (re as RegExp).source) || (re as string);
}

const noneRe: RegExp = { exec: (/*s*/) => null } as any as RegExp;

function langRe(language: LanguageDef, value: StringRegExp, global?: true): RegExp {
    return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
}

export function compileLanguage(language: LanguageDef): CompiledLanguageDef {
    const cached_modes: [SyntaxDef, CompiledSyntaxDef][] = [];

    function getCompiled(sub: SyntaxDef): CompiledSyntaxDef | undefined {
        for (const [mode, compiled] of cached_modes) {
            if (sub === mode) {
                return compiled;
            }
        }
    }

    const cached_variants: [SyntaxDef, SyntaxDef[]][] = [];

    function getVariants(mode: SyntaxDef): SyntaxDef[] | undefined {
        if (!mode.variants || !mode.variants.length) {
            return undefined;
        }

        for (const [mode_, variants] of cached_variants) {
            if (mode === mode_) {
                return variants;
            }
        }

        const variants = mode.variants.map(variant => ({ ...mode, variants: undefined, ...variant }));

        cached_variants.push([mode, variants]);

        return variants;
    };

    function compileMode(mode: SyntaxDef, parent?: CompiledSyntaxDef, parent_terminator_end?: string): CompiledSyntaxDef {
        const already_compiled = getCompiled(mode);

        if (already_compiled) {
            return already_compiled;
        }

        const compiled: CompiledSyntaxDef = {
            lexemesRe: langRe(language, mode.lexemes || /\w+/, true),
            relevance: mode.relevance == null ? 1 : mode.relevance,
            contains: [],
            terminators: noneRe,
        };

        cached_modes.push([mode, compiled]);

        if (mode.className) {
            compiled.className = mode.className;
        }

        if (mode.illegal) {
            compiled.illegalRe = langRe(language, mode.illegal);
        }

        for (const key of ['endsParent', 'endsWithParent', 'skip', 'excludeBegin', 'excludeEnd', 'returnBegin', 'returnEnd']) {
            if (mode[key as keyof SyntaxDef]) {
                compiled[key as keyof CompiledSyntaxDef] = true;
            }
        }

        // compile parenthes
        let compiled_terminator_end: string | undefined;

        if (parent) {
            const begin = mode.beginKeywords ?
                (`\\b(${mode.beginKeywords.split(/\s+/).join('|')})\\b`) :
                (mode.begin || /\B|\b/);

            mode.begin = begin;
            compiled.beginRe = langRe(language, begin);

            const end = !mode.end && !mode.endsWithParent ? /\B|\b/ : mode.end;

            if (end) {
                mode.end = end;
                compiled.endRe = langRe(language, end);
            }

            compiled_terminator_end = reStr(end) || '';

            if (mode.endsWithParent && parent_terminator_end) {
                compiled_terminator_end += (end ? '|' : '') + parent_terminator_end;
            }
        }

        // compile keywords
        const keywords = mode.keywords || mode.beginKeywords;

        if (keywords) {
            const compiled_keywords: CompiledKeywords = {} as CompiledKeywords;

            const flatten = (className: string, str: string) => {
                if (language.case_insensitive) {
                    str = str.toLowerCase();
                }
                const kws = str.split(/\s+/);
                for (const kw of kws) {
                    const [key, rel] = kw.split(/\|/) as [KeywordGroup, string];
                    compiled_keywords[key] = [className, rel ? Number(rel) : 1];
                }
            };

            if (typeof keywords == 'string') { // string
                flatten('keyword', keywords);
            } else {
                for (const className in keywords) {
                    flatten(className, keywords[className as KeywordGroup] as string);
                }
            }

            compiled.keywords = compiled_keywords;
        }

        // compile contains
        const contains: SyntaxDef[] = [];

        if (mode.contains && mode.contains.length) {
            // expand mode
            for (const child of mode.contains) {
                const sub = child === 'self' ? mode : child;
                const variants = getVariants(sub) || (sub.endsWithParent && [{ ...sub }]) || [sub];
                for (const variant of variants) {
                    contains.push(variant);
                }
            }

            compiled.contains = contains.map(child => compileMode(child, compiled, compiled_terminator_end));
        }

        if (mode.starts) {
            compiled.starts = compileMode(mode.starts, parent, parent_terminator_end);
        }

        const terminators = [
            ...contains.map(child => child.beginKeywords ? `\\.?(${child.begin})\\.?` : child.begin),
            compiled_terminator_end,
            mode.illegal
        ].map(reStr).filter(Boolean);

        if (terminators.length)
            compiled.terminators = langRe(language, terminators.join('|'), true);

        return compiled;
    }

    const compiled: CompiledLanguageDef = compileMode(language) as CompiledLanguageDef;

    if (language.case_insensitive) compiled.case_insensitive = true;
    if (language.subLanguage) compiled.subLanguage = language.subLanguage;

    return compiled;
}
