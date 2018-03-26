/*
Language: Python
Category: common
*/

import { KeywordsDef, SyntaxDef, LanguageDef } from '../types';
import {
    BACKSLASH_ESCAPE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    BINARY_NUMBER_RE,
    C_NUMBER_RE,
    HASH_COMMENT_MODE,
    UNDERSCORE_TITLE_MODE,
} from '../common';

const KEYWORDS: KeywordsDef = {
    keyword:
        'and elif is global as in if from raise for except finally print import pass return ' +
        'exec else break not with class assert yield try while continue del or def lambda ' +
        'async await nonlocal|10 None True False',
    built_in:
        'Ellipsis NotImplemented'
};

const PROMPT = {
    className: 'meta', begin: /^(>>>|\.\.\.) /
};

const SUBST: SyntaxDef = {
    className: 'subst',
    begin: /\{/, end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
};

const STRING = {
    className: 'string',
    contains: [BACKSLASH_ESCAPE],
    variants: [
        {
            begin: /(u|b)?r?'''/, end: /'''/,
            contains: [PROMPT],
            relevance: 10
        },
        {
            begin: /(u|b)?r?"""/, end: /"""/,
            contains: [PROMPT],
            relevance: 10
        },
        {
            begin: /(fr|rf|f)'''/, end: /'''/,
            contains: [PROMPT, SUBST]
        },
        {
            begin: /(fr|rf|f)"""/, end: /"""/,
            contains: [PROMPT, SUBST]
        },
        {
            begin: /(u|r|ur)'/, end: /'/,
            relevance: 10
        },
        {
            begin: /(u|r|ur)"/, end: /"/,
            relevance: 10
        },
        {
            begin: /(b|br)'/, end: /'/
        },
        {
            begin: /(b|br)"/, end: /"/
        },
        {
            begin: /(fr|rf|f)'/, end: /'/,
            contains: [SUBST]
        },
        {
            begin: /(fr|rf|f)"/, end: /"/,
            contains: [SUBST]
        },
        APOS_STRING_MODE,
        QUOTE_STRING_MODE
    ]
};

const NUMBER = {
    className: 'number', relevance: 0,
    variants: [
        { begin: BINARY_NUMBER_RE + '[lLjJ]?' },
        { begin: '\\b(0o[0-7]+)[lLjJ]?' },
        { begin: C_NUMBER_RE + '[lLjJ]?' }
    ]
};

const PARAMS: SyntaxDef = {
    className: 'params',
    begin: /\(/, end: /\)/,
    contains: ['self', PROMPT, NUMBER, STRING]
};

SUBST.contains = [STRING, NUMBER, PROMPT];

export const Python: LanguageDef = {
    name: 'python',
    aliases: ['py', 'gyp'],
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)|=>/,
    contains: [
        PROMPT,
        NUMBER,
        STRING,
        HASH_COMMENT_MODE,
        {
            variants: [
                { className: 'function', beginKeywords: 'def' },
                { className: 'class', beginKeywords: 'class' }
            ],
            end: /:/,
            illegal: /[${=;\n,]/,
            contains: [
                UNDERSCORE_TITLE_MODE,
                PARAMS,
                {
                    begin: /->/, endsWithParent: true,
                    keywords: 'None'
                }
            ]
        },
        {
            className: 'meta',
            begin: /^[\t ]*@/, end: /$/
        },
        {
            begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
        }
    ]
};
