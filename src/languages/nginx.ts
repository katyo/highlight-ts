/*
Language: Nginx
Author: Peter Leonov <gojpeg@yandex.ru>
Contributors: Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common, config
*/

import { LanguageDef } from '../types';
import { UNDERSCORE_IDENT_RE, HASH_COMMENT_MODE, BACKSLASH_ESCAPE } from '../common';

const VAR = {
    className: 'variable',
    variants: [
        { begin: /\$\d+/ },
        { begin: /\$\{/, end: /}/ },
        { begin: '[\\$\\@]' + UNDERSCORE_IDENT_RE }
    ]
};

const DEFAULT = {
    endsWithParent: true,
    lexemes: '[a-z/_]+',
    keywords: {
        literal:
            'on off yes no true false none blocked debug info notice warn error crit ' +
            'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
    },
    relevance: 0,
    illegal: '=>',
    contains: [
        HASH_COMMENT_MODE,
        {
            className: 'string',
            contains: [BACKSLASH_ESCAPE, VAR],
            variants: [
                { begin: /"/, end: /"/ },
                { begin: /'/, end: /'/ }
            ]
        },
        // this swallows entire URLs to avoid detecting numbers within
        {
            begin: '([a-z]+):/', end: '\\s', endsWithParent: true, excludeEnd: true,
            contains: [VAR]
        },
        {
            className: 'regexp',
            contains: [BACKSLASH_ESCAPE, VAR],
            variants: [
                { begin: "\\s\\^", end: "\\s|{|;", returnEnd: true },
                // regexp locations (~, ~*)
                { begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true },
                // *.example.com
                { begin: "\\*(\\.[a-z\\-]+)+" },
                // sub.example.*
                { begin: "([a-z\\-]+\\.)+\\*" }
            ]
        },
        // IP
        {
            className: 'number',
            begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
        },
        // units
        {
            className: 'number',
            begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
            relevance: 0
        },
        VAR
    ]
};

export const Nginx: LanguageDef = {
    name: 'nginx',
    aliases: ['nginxconf'],
    contains: [
        HASH_COMMENT_MODE,
        {
            begin: UNDERSCORE_IDENT_RE + '\\s+{', returnBegin: true,
            end: '{',
            contains: [
                {
                    className: 'section',
                    begin: UNDERSCORE_IDENT_RE
                }
            ],
            relevance: 0
        },
        {
            begin: UNDERSCORE_IDENT_RE + '\\s', end: ';|{', returnBegin: true,
            contains: [
                {
                    className: 'attribute',
                    begin: UNDERSCORE_IDENT_RE,
                    starts: DEFAULT
                }
            ],
            relevance: 0
        }
    ],
    illegal: '[^\\s\\}]'
};
