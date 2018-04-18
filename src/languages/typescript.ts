/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Category: scripting
*/

import { KeywordsDef, SyntaxDefOrRef, LanguageDef } from '../types';
import {
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    BACKSLASH_ESCAPE,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    C_NUMBER_RE,
    RE_STARTERS_RE,
    REGEXP_MODE,
    IDENT_RE,
    TITLE_MODE as TITLE_MODE_,
} from '../common';

const KEYWORDS: KeywordsDef = {
    keyword:
        'in if for while finally var new function do return void else break catch ' +
        'instanceof with throw case default try this switch continue typeof delete ' +
        'let yield const class public private protected get set super ' +
        'static implements enum export import declare type namespace abstract ' +
        'as from extends async await',
    literal:
        'true false null undefined NaN Infinity',
    built_in:
        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
        'module console window document any number boolean string void Promise'
};

const TITLE_MODE = {
    ...TITLE_MODE_,
    begin: /[A-Za-z$_][0-9A-Za-z$_]*/
};

const PARAMS_CONTAINS: SyntaxDefOrRef[] = [
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
];

const PARAMS_MODE = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS,
    contains: PARAMS_CONTAINS,
    //illegal: /["'\(]/
};

const ARROW_FUNCTION_MODE: SyntaxDefOrRef = {
    className: 'function',
    begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>',
    returnBegin: true,
    end: '\\s*=>',
    contains: [
        {
            className: 'params',
            variants: [
                {
                    begin: IDENT_RE
                },
                {
                    begin: /\(\s*\)/,
                },
                { ...PARAMS_MODE, className: undefined }
            ]
        }
    ]
};

PARAMS_CONTAINS.push(ARROW_FUNCTION_MODE);

export const TypeScript: LanguageDef = {
    name: 'typescript',
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [
        {
            className: 'meta',
            begin: /^\s*['"]use strict['"]/
        },
        APOS_STRING_MODE,
        QUOTE_STRING_MODE,
        { // template string
            className: 'string',
            begin: '`', end: '`',
            contains: [
                BACKSLASH_ESCAPE,
                {
                    className: 'subst',
                    begin: '\\$\\{', end: '\\}'
                }
            ]
        },
        C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE,
        {
            className: 'number',
            variants: [
                { begin: '\\b(0[bB][01]+)' },
                { begin: '\\b(0[oO][0-7]+)' },
                { begin: C_NUMBER_RE }
            ],
            relevance: 0
        },
        { // "value" container
            begin: '(' + RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
                C_LINE_COMMENT_MODE,
                C_BLOCK_COMMENT_MODE,
                REGEXP_MODE,
                ARROW_FUNCTION_MODE
            ],
            relevance: 0
        },
        {
            className: 'function',
            begin: 'function', end: /[\{;]/, excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
                'self',
                TITLE_MODE,
                PARAMS_MODE,
            ],
            illegal: /%/,
            relevance: 0 // () => {} is more typical in TypeScript
        },
        {
            beginKeywords: 'constructor', end: /\{/, excludeEnd: true,
            contains: [
                'self',
                PARAMS_MODE,
            ]
        },
        { // prevent references like module.id from being higlighted as module definitions
            begin: /module\./,
            keywords: { built_in: 'module' },
            relevance: 0
        },
        {
            beginKeywords: 'module', end: /\{/, excludeEnd: true
        },
        {
            beginKeywords: 'namespace', end: /\{/, excludeEnd: true,
            contains: [TITLE_MODE]
        },
        {
            beginKeywords: 'interface', end: /\{/, excludeEnd: true,
            keywords: 'interface extends',
            contains: [TITLE_MODE]
        },
        {
            begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        },
        {
            begin: '\\.' + IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
        },
        {
            className: 'meta', begin: '@[A-Za-z]+'
        }
    ]
};
