/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: http://seejohncode.com/
Category: common, markup
*/

import { LanguageDef, SyntaxDef } from '../types';

// inline links
const INLINE_LINK_MODE = {
    begin: '<\\w+:[^>]*>',
    returnBegin: true,
    contains: [
        {
            className: 'link',
            begin: '<', end: '>',
            excludeBegin: true, excludeEnd: true
        }
    ],
    relevance: 5
};

// inline html
const INLINE_HTML_MODE = {
    begin: '<', end: '>',
    subLanguage: 'xml',
    relevance: 0
};

// inline code
const INLINE_CODE_MODE = {
    className: 'code',
    begin: '`.+?`'
};

const STRONG_CONTAINS: SyntaxDef[] = [
    INLINE_LINK_MODE,
    INLINE_HTML_MODE,
    INLINE_CODE_MODE,
];

// strong segments
const STRONG_MODE = {
    className: 'strong',
    variants: [
        {
            begin: '\\*{2}',
            end: '\\*{2}',
            contains: STRONG_CONTAINS
        },
        {
            begin: '_{2}',
            end: '_{2}',
            contains: STRONG_CONTAINS
        },
    ]
};

const EMPHASIS_CONTAINS: SyntaxDef[] = [
    INLINE_LINK_MODE,
    INLINE_HTML_MODE,
    INLINE_CODE_MODE,
];

// emphasis segments
const EMPHASIS_MODE = {
    className: 'emphasis',
    variants: [
        {
            begin: '\\*(?!\\*)',
            end: '\\*(?!\\*)',
            contains: EMPHASIS_CONTAINS
        },
        {
            begin: '_(?!_)',
            end: '_(?!_)',
            contains: EMPHASIS_CONTAINS,
            relevance: 0,
        },
    ]
};

const INLINE_CONTAINS: SyntaxDef[] = [
    INLINE_LINK_MODE,
    INLINE_HTML_MODE,
    INLINE_CODE_MODE,
];

// using links - title and link
const LINK_MODE = {
    begin: '\\!?\\[.+?\\][\\(\\[].*?[\\)\\]]',
    returnBegin: true,
    contains: [
        {
            className: 'string',
            begin: '\\!?\\[', end: '\\]',
            excludeBegin: true,
            returnEnd: true,
            contains: INLINE_CONTAINS,
            relevance: 0
        },
        {
            className: 'link',
            begin: '\\]\\(', end: '\\)',
            excludeBegin: true, excludeEnd: true
        },
        {
            className: 'symbol',
            begin: '\\]\\[', end: '\\]',
            excludeBegin: true, excludeEnd: true
        }
    ],
    relevance: 10
};

STRONG_CONTAINS.push(EMPHASIS_MODE);
STRONG_CONTAINS.push(LINK_MODE);

EMPHASIS_CONTAINS.push(STRONG_MODE);
EMPHASIS_CONTAINS.push(LINK_MODE);

INLINE_CONTAINS.push(STRONG_MODE);
INLINE_CONTAINS.push(EMPHASIS_MODE);
INLINE_CONTAINS.push(LINK_MODE);

export const Markdown: LanguageDef = {
    name: 'markdown',
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [
        // highlight headers
        {
            className: 'section',
            variants: [
                { begin: '^#{1,6}', end: '$' },
                { begin: '^.+?\\n[=-]{2,}$' }
            ],
            contains: INLINE_CONTAINS
        },
        // lists (indicators only)
        {
            className: 'bullet',
            begin: '^\\s*([*+-]|(\\d+\\.))\\s+'
        },
        // blockquotes
        {
            className: 'quote',
            begin: '^>\\s+', end: '$',
            contains: INLINE_CONTAINS
        },
        // code snippets
        {
            className: 'code',
            variants: [
                {
                    begin: '^```\w*\s*$', end: '^```\s*$'
                },
                {
                    begin: '^( {4}|\t)', end: '$',
                    relevance: 0
                }
            ]
        },
        // horizontal rules
        {
            begin: '^[-\\*]{3,}', end: '$'
        },
        {
            begin: /^\s*\[[^\n]+\]:/,
            returnBegin: true,
            contains: [
                {
                    className: 'symbol',
                    begin: /\s*\[/, end: /\]/,
                    excludeBegin: true, excludeEnd: true
                },
                {
                    className: 'link',
                    begin: /:\s*/, end: /$/,
                    excludeBegin: true
                }
            ]
        },
        ...INLINE_CONTAINS
    ]
};
