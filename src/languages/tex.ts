/*
Language: TeX
Author: Vladimir Moskva <vladmos@gmail.com>
Website: http://fulc.ru/
Category: markup
*/

import { LanguageDef } from '../types';
import { COMMENT } from '../common';

const COMMAND = {
    className: 'tag',
    begin: /\\/,
    relevance: 0,
    contains: [
        {
            className: 'name',
            variants: [
                { begin: /[a-zA-Zа-яА-я]+[*]?/ },
                { begin: /[^a-zA-Zа-яА-я0-9]/ }
            ],
            starts: {
                endsWithParent: true,
                relevance: 0,
                contains: [
                    {
                        className: 'string', // because it looks like attributes in HTML tags
                        variants: [
                            { begin: /\[/, end: /\]/ },
                            { begin: /\{/, end: /\}/ }
                        ]
                    },
                    {
                        begin: /\s*=\s*/, endsWithParent: true,
                        relevance: 0,
                        contains: [
                            {
                                className: 'number',
                                begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

export const TeX: LanguageDef = {
    name: 'tex',
    aliases: ['latex', 'xetex'],
    contains: [
        COMMAND,
        {
            className: 'formula',
            contains: [COMMAND],
            relevance: 0,
            variants: [
                { begin: /\$\$/, end: /\$\$/ },
                { begin: /\$/, end: /\$/ }
            ]
        },
        COMMENT(
            '%',
            '$',
            {
                relevance: 0
            }
        )
    ]
};
