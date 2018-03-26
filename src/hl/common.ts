import { SyntaxDef } from './types';
import { StringRegExp } from '../index';

// Common regexps
export const IDENT_RE = '[a-zA-Z]\\w*';
export const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
export const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
export const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
export const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...

export const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

// Common modes
export const BACKSLASH_ESCAPE: SyntaxDef = {
    begin: '\\\\[\\s\\S]',
    relevance: 0
};

export const APOS_STRING_MODE: SyntaxDef = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [BACKSLASH_ESCAPE]
};

export const QUOTE_STRING_MODE: SyntaxDef = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [BACKSLASH_ESCAPE]
};

export const PHRASAL_WORDS_MODE: SyntaxDef = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};

export function COMMENT(begin: StringRegExp, end?: StringRegExp, inherits: SyntaxDef = {}): SyntaxDef {
    const mode: SyntaxDef = {
        className: 'comment',
        begin, end,
        contains: [],
        ...inherits
    };
    const { contains } = mode;
    if (contains) {
        contains.push(PHRASAL_WORDS_MODE);
        contains.push({
            className: 'doctag',
            begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
            relevance: 0
        });
    }
    return mode;
};

export const C_LINE_COMMENT_MODE: SyntaxDef = COMMENT('//', '$');

export const C_BLOCK_COMMENT_MODE: SyntaxDef = COMMENT('/\\*', '\\*/');

export const HASH_COMMENT_MODE: SyntaxDef = COMMENT('#', '$');

export const NUMBER_MODE: SyntaxDef = {
    className: 'number',
    begin: NUMBER_RE,
    relevance: 0
};

export const C_NUMBER_MODE: SyntaxDef = {
    className: 'number',
    begin: C_NUMBER_RE,
    relevance: 0
};

export const BINARY_NUMBER_MODE: SyntaxDef = {
    className: 'number',
    begin: BINARY_NUMBER_RE,
    relevance: 0
};

export const CSS_NUMBER_MODE: SyntaxDef = {
    className: 'number',
    begin: NUMBER_RE + '(' +
        '%|em|ex|ch|rem' +
        '|vw|vh|vmin|vmax' +
        '|cm|mm|in|pt|pc|px' +
        '|deg|grad|rad|turn' +
        '|s|ms' +
        '|Hz|kHz' +
        '|dpi|dpcm|dppx' +
        ')?',
    relevance: 0
};

export const REGEXP_MODE: SyntaxDef = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
        BACKSLASH_ESCAPE,
        {
            begin: /\[/, end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
        }
    ]
};

export const TITLE_MODE: SyntaxDef = {
    className: 'title',
    begin: IDENT_RE,
    relevance: 0
};

export const UNDERSCORE_TITLE_MODE: SyntaxDef = {
    className: 'title',
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
};

export const METHOD_GUARD: SyntaxDef = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
    relevance: 0
};
