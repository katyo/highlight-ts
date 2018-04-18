/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common
*/

import { LanguageDef } from '../types';
import {
    BACKSLASH_ESCAPE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    BINARY_NUMBER_MODE,
    C_NUMBER_MODE,
    HASH_COMMENT_MODE,
    COMMENT,
    UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE,
    C_BLOCK_COMMENT_MODE,
} from '../common';

const VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
};

const PREPROCESSOR = {
    className: 'meta', begin: /<\?(php)?|\?>/
};

const STRING = {
    className: 'string',
    contains: [BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
        {
            begin: 'b"', end: '"'
        },
        {
            begin: 'b\'', end: '\''
        },
        { ...APOS_STRING_MODE, illegal: undefined },
        { ...QUOTE_STRING_MODE, illegal: undefined }
    ]
};

const NUMBER = { variants: [BINARY_NUMBER_MODE, C_NUMBER_MODE] };

export const PHP: LanguageDef = {
    name: 'php',
    aliases: ['php3', 'php4', 'php5', 'php6'],
    case_insensitive: true,
    keywords:
        'and include_once list abstract global private echo interface as static endswitch ' +
        'array null if endwhile or const for endforeach self var while isset public ' +
        'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
        'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
        'catch __METHOD__ case exception default die require __FUNCTION__ ' +
        'enddeclare final try switch continue endfor endif declare unset true false ' +
        'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
        'yield finally',
    contains: [
        HASH_COMMENT_MODE,
        COMMENT('//', '$', { contains: [PREPROCESSOR] }),
        COMMENT(
            '/\\*',
            '\\*/',
            {
                contains: [
                    {
                        className: 'doctag',
                        begin: '@[A-Za-z]+'
                    }
                ]
            }
        ),
        COMMENT(
            '__halt_compiler.+?;',
            undefined,
            {
                endsWithParent: true,
                keywords: '__halt_compiler',
                lexemes: UNDERSCORE_IDENT_RE
            }
        ),
        {
            className: 'string',
            begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
            contains: [
                BACKSLASH_ESCAPE,
                {
                    className: 'subst',
                    variants: [
                        { begin: /\$\w+/ },
                        { begin: /\{\$/, end: /\}/ }
                    ]
                }
            ]
        },
        PREPROCESSOR,
        {
            className: 'keyword', begin: /\$this\b/
        },
        VARIABLE,
        {
            // swallow composed identifiers to avoid parsing them as keywords
            begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        },
        {
            className: 'function',
            beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
            illegal: '\\$|\\[|%',
            contains: [
                UNDERSCORE_TITLE_MODE,
                {
                    className: 'params',
                    begin: '\\(', end: '\\)',
                    contains: [
                        'self',
                        VARIABLE,
                        C_BLOCK_COMMENT_MODE,
                        STRING,
                        NUMBER
                    ]
                }
            ]
        },
        {
            className: 'class',
            beginKeywords: 'class interface', end: '{', excludeEnd: true,
            illegal: /[:\(\$"]/,
            contains: [
                { beginKeywords: 'extends implements' },
                UNDERSCORE_TITLE_MODE
            ]
        },
        {
            beginKeywords: 'namespace', end: ';',
            illegal: /[\.']/,
            contains: [UNDERSCORE_TITLE_MODE]
        },
        {
            beginKeywords: 'use', end: ';',
            contains: [UNDERSCORE_TITLE_MODE]
        },
        {
            begin: '=>' // No markup, just a relevance booster
        },
        STRING,
        NUMBER
    ]
};
