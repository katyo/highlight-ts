/*
Language: Haxe
Author: Christopher Kaster <ikasoki@gmail.com> (Based on the actionscript.js language file by Alexander Myadzel)
Contributors: Kenton Hamaluik <kentonh@gmail.com>
*/

import { LanguageDef } from '../types';
import {
    BACKSLASH_ESCAPE,
    QUOTE_STRING_MODE,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    C_NUMBER_MODE,
    TITLE_MODE,
} from '../common';

const IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';

//const IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

const HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

export const Haxe: LanguageDef = {
    name: 'haxe',
    aliases: ['hx'],
    keywords: {
        keyword: 'break case cast catch continue default do dynamic else enum extern ' +
            'for function here if import in inline never new override package private get set ' +
            'public return static super switch this throw trace try typedef untyped using var while ' +
            HAXE_BASIC_TYPES,
        built_in:
            'trace this',
        literal:
            'true false null _'
    },
    contains: [
        {
            className: 'string', // interpolate-able strings
            begin: '\'', end: '\'',
            contains: [
                BACKSLASH_ESCAPE,
                {
                    className: 'subst', // interpolation
                    begin: '\\$\\{', end: '\\}'
                },
                {
                    className: 'subst', // interpolation
                    begin: '\\$', end: '\\W}'
                }
            ]
        },
        QUOTE_STRING_MODE,
        C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE,
        C_NUMBER_MODE,
        {
            className: 'meta', // compiler meta
            begin: '@:', end: '$'
        },
        {
            className: 'meta', // compiler conditionals
            begin: '#', end: '$',
            keywords: { 'meta-keyword': 'if else elseif end error' }
        },
        {
            className: 'type', // function types
            begin: ':[ \t]*', end: '[^A-Za-z0-9_ \t\\->]',
            excludeBegin: true, excludeEnd: true,
            relevance: 0
        },
        {
            className: 'type', // types
            begin: ':[ \t]*', end: '\\W',
            excludeBegin: true, excludeEnd: true
        },
        {
            className: 'type', // instantiation
            begin: 'new *', end: '\\W',
            excludeBegin: true, excludeEnd: true
        },
        {
            className: 'class', // enums
            beginKeywords: 'enum', end: '\\{',
            contains: [
                TITLE_MODE
            ]
        },
        {
            className: 'class', // abstracts
            beginKeywords: 'abstract', end: '[\\{$]',
            contains: [
                {
                    className: 'type',
                    begin: '\\(', end: '\\)',
                    excludeBegin: true, excludeEnd: true
                },
                {
                    className: 'type',
                    begin: 'from +', end: '\\W',
                    excludeBegin: true, excludeEnd: true
                },
                {
                    className: 'type',
                    begin: 'to +', end: '\\W',
                    excludeBegin: true, excludeEnd: true
                },
                TITLE_MODE
            ],
            keywords: {
                keyword: 'abstract from to'
            }
        },
        {
            className: 'class', // classes
            begin: '\\b(class|interface) +', end: '[\\{$]', excludeEnd: true,
            keywords: 'class interface',
            contains: [
                {
                    className: 'keyword',
                    begin: '\\b(extends|implements) +',
                    keywords: 'extends implements',
                    contains: [
                        {
                            className: 'type',
                            begin: IDENT_RE,
                            relevance: 0
                        }
                    ]
                },
                TITLE_MODE
            ]
        },
        {
            className: 'function',
            beginKeywords: 'function', end: '\\(', excludeEnd: true,
            illegal: '\\S',
            contains: [
                TITLE_MODE
            ]
        }
    ],
    illegal: /<\//
};
