/*
Language: Java
Author: Vsevolod Solovyov <vsevolod.solovyov@gmail.com>
Category: common, enterprise
*/

import { LanguageDef } from '../types';
import {
    COMMENT,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    UNDERSCORE_TITLE_MODE,
    UNDERSCORE_IDENT_RE,
    C_NUMBER_MODE,
} from '../common';

const JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';

const GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';

const KEYWORDS =
    'false synchronized int abstract float private char boolean static null if const ' +
    'for true while long strictfp finally protected import native final void ' +
    'enum else break transient catch instanceof byte super volatile case assert short ' +
    'package default double public try this switch continue throws protected public private ' +
    'module requires exports do';

// https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
const JAVA_NUMBER_RE = '\\b' +
    '(' +
    '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
    '|' +
    '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
    '|' +
    '(' +
    '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
    '|' +
    '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
    ')' +
    '([eE][-+]?\\d+)?' + // octal, decimal, float
    ')' +
    '[lLfF]?';

const JAVA_NUMBER_MODE = {
    className: 'number',
    begin: JAVA_NUMBER_RE,
    relevance: 0
};

export const Java: LanguageDef = {
    name: 'java',
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
        COMMENT(
            '/\\*\\*',
            '\\*/',
            {
                relevance: 0,
                contains: [
                    {
                        // eat up @'s in emails to prevent them to be recognized as doctags
                        begin: /\w+@/, relevance: 0
                    },
                    {
                        className: 'doctag',
                        begin: '@[A-Za-z]+'
                    }
                ]
            }
        ),
        C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE,
        APOS_STRING_MODE,
        QUOTE_STRING_MODE,
        {
            className: 'class',
            beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
            keywords: 'class interface',
            illegal: /[:"\[\]]/,
            contains: [
                { beginKeywords: 'extends implements' },
                UNDERSCORE_TITLE_MODE
            ]
        },
        {
            // Expression keywords prevent 'keyword Name(...)' from being
            // recognized as a function definition
            beginKeywords: 'new throw return else',
            relevance: 0
        },
        {
            className: 'function',
            begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
                {
                    begin: UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
                    relevance: 0,
                    contains: [UNDERSCORE_TITLE_MODE]
                },
                {
                    className: 'params',
                    begin: /\(/, end: /\)/,
                    keywords: KEYWORDS,
                    relevance: 0,
                    contains: [
                        APOS_STRING_MODE,
                        QUOTE_STRING_MODE,
                        C_NUMBER_MODE,
                        C_BLOCK_COMMENT_MODE
                    ]
                },
                C_LINE_COMMENT_MODE,
                C_BLOCK_COMMENT_MODE
            ]
        },
        JAVA_NUMBER_MODE,
        {
            className: 'meta', begin: '@[A-Za-z]+'
        }
    ]
};
