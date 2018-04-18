/*
Language: Lisp
Description: Generic lisp syntax
Author: Vasily Polovnyov <vast@whiteants.net>
Category: lisp
*/

import { SyntaxDef, LanguageDef } from '../types';
import { QUOTE_STRING_MODE, COMMENT as COMMENT_ } from '../common';

const LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*';

const MEC_RE = '\\|[^]*?\\|';

const LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?';

const SHEBANG: SyntaxDef = {
    className: 'meta',
    begin: '^#!', end: '$'
};

const LITERAL: SyntaxDef = {
    className: 'literal',
    begin: '\\b(t{1}|nil)\\b'
};

const NUMBER: SyntaxDef = {
    className: 'number',
    variants: [
        { begin: LISP_SIMPLE_NUMBER_RE, relevance: 0 },
        { begin: '#(b|B)[0-1]+(/[0-1]+)?' },
        { begin: '#(o|O)[0-7]+(/[0-7]+)?' },
        { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' },
        { begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)' }
    ]
};

const STRING: SyntaxDef = { ...QUOTE_STRING_MODE, illegal: undefined };

const COMMENT: SyntaxDef = COMMENT_(
    ';', '$',
    {
        relevance: 0
    }
);

const VARIABLE: SyntaxDef = {
    begin: '\\*', end: '\\*'
};

const KEYWORD: SyntaxDef = {
    className: 'symbol',
    begin: '[:&]' + LISP_IDENT_RE
};

const IDENT: SyntaxDef = {
    begin: LISP_IDENT_RE,
    relevance: 0
};

const MEC: SyntaxDef = {
    begin: MEC_RE
};

const QUOTED_LIST: SyntaxDef = {
    begin: '\\(', end: '\\)',
    contains: ['self', LITERAL, STRING, NUMBER, IDENT]
};

const QUOTED: SyntaxDef = {
    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
    variants: [
        {
            begin: '[\'`]\\(', end: '\\)'
        },
        {
            begin: '\\(quote ', end: '\\)',
            keywords: { name: 'quote' }
        },
        {
            begin: '\'' + MEC_RE
        }
    ]
};

const QUOTED_ATOM: SyntaxDef = {
    variants: [
        { begin: '\'' + LISP_IDENT_RE },
        { begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*' }
    ]
};

const LIST: SyntaxDef = {
    begin: '\\(\\s*', end: '\\)'
};

const BODY: SyntaxDef = {
    endsWithParent: true,
    relevance: 0
};

LIST.contains = [
    {
        className: 'name',
        variants: [
            { begin: LISP_IDENT_RE },
            { begin: MEC_RE }
        ]
    },
    BODY
];

BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];

export const Lisp: LanguageDef = {
    name: 'lisp',
    illegal: /\S/,
    contains: [
        NUMBER,
        SHEBANG,
        LITERAL,
        STRING,
        COMMENT,
        QUOTED,
        QUOTED_ATOM,
        LIST,
        IDENT
    ]
};
