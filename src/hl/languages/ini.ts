/*
Language: Ini
Contributors: Guillaume Gomez <guillaume1.gomez@gmail.com>
Category: common, config
*/

import { LanguageDef } from '../types';
import {
    BACKSLASH_ESCAPE,
    COMMENT,
    HASH_COMMENT_MODE,
    NUMBER_MODE
} from '../common';

const STRING = {
    className: "string",
    contains: [BACKSLASH_ESCAPE],
    variants: [
        {
            begin: "'''", end: "'''",
            relevance: 10
        }, {
            begin: '"""', end: '"""',
            relevance: 10
        }, {
            begin: '"', end: '"'
        }, {
            begin: "'", end: "'"
        }
    ]
};

export const INI: LanguageDef = {
    name: 'ini',
    aliases: ['toml'],
    case_insensitive: true,
    illegal: /\S/,
    contains: [
        COMMENT(';', '$'),
        HASH_COMMENT_MODE,
        {
            className: 'section',
            begin: /^\s*\[+/, end: /\]+/
        },
        {
            begin: /^[a-z0-9\[\]_-]+\s*=\s*/, end: '$',
            returnBegin: true,
            contains: [
                {
                    className: 'attr',
                    begin: /[a-z0-9\[\]_-]+/
                },
                {
                    begin: /=/, endsWithParent: true,
                    relevance: 0,
                    contains: [
                        {
                            className: 'literal',
                            begin: /\bon|off|true|false|yes|no\b/
                        },
                        {
                            className: 'variable',
                            variants: [
                                { begin: /\$[\w\d"][\w\d_]*/ },
                                { begin: /\$\{(.*?)}/ }
                            ]
                        },
                        STRING,
                        {
                            className: 'number',
                            begin: /([\+\-]+)?[\d]+_[\d_]+/
                        },
                        NUMBER_MODE
                    ]
                }
            ]
        }
    ]
};
