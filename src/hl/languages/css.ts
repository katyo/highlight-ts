/*
Language: CSS
Category: common, css
*/

import { LanguageDef } from '../types';
import {
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    CSS_NUMBER_MODE,
    C_BLOCK_COMMENT_MODE,
} from '../common';

const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
const RULE = {
    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
    contains: [
        {
            className: 'attribute',
            begin: /\S/, end: ':', excludeEnd: true,
            starts: {
                endsWithParent: true, excludeEnd: true,
                contains: [
                    {
                        begin: /[\w-]+\(/, returnBegin: true,
                        contains: [
                            {
                                className: 'built_in',
                                begin: /[\w-]+/
                            },
                            {
                                begin: /\(/, end: /\)/,
                                contains: [
                                    APOS_STRING_MODE,
                                    QUOTE_STRING_MODE
                                ]
                            }
                        ]
                    },
                    CSS_NUMBER_MODE,
                    QUOTE_STRING_MODE,
                    APOS_STRING_MODE,
                    C_BLOCK_COMMENT_MODE,
                    {
                        className: 'number', begin: '#[0-9A-Fa-f]+'
                    },
                    {
                        className: 'meta', begin: '!important'
                    }
                ]
            }
        }
    ]
};

export const CSS: LanguageDef = {
    name: 'css',
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [
        C_BLOCK_COMMENT_MODE,
        {
            className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
        },
        {
            className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
        },
        {
            className: 'selector-attr',
            begin: /\[/, end: /\]/,
            illegal: '$'
        },
        {
            className: 'selector-pseudo',
            begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        },
        {
            begin: '@(font-face|page)',
            lexemes: '[a-z-]+',
            keywords: 'font-face page'
        },
        {
            begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
            // because it doesn’t let it to be parsed as
            // a rule set but instead drops parser into
            // the default mode which is how it should be.
            illegal: /:/, // break on Less variables @var: ...
            contains: [
                {
                    className: 'keyword',
                    begin: /\w+/
                },
                {
                    begin: /\s/, endsWithParent: true, excludeEnd: true,
                    relevance: 0,
                    contains: [
                        APOS_STRING_MODE, QUOTE_STRING_MODE,
                        CSS_NUMBER_MODE
                    ]
                }
            ]
        },
        {
            className: 'selector-tag', begin: IDENT_RE,
            relevance: 0
        },
        {
            begin: '{', end: '}',
            illegal: /\S/,
            contains: [
                C_BLOCK_COMMENT_MODE,
                RULE,
            ]
        }
    ]
};
