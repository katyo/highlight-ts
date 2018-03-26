/*
Language: YAML
Author: Stefan Wienert <stwienert@gmail.com>
Requires: ruby.js
Description: YAML (Yet Another Markdown Language)
Category: config
*/

import { LanguageDef } from '../types';
import { BACKSLASH_ESCAPE, UNDERSCORE_IDENT_RE, HASH_COMMENT_MODE, C_NUMBER_MODE } from '../common';

const LITERALS = 'true false yes no null';

const keyPrefix = '^[ \\-]*';

const keyName = '[a-zA-Z_][\\w\\-]*';

const KEY = {
    className: 'attr',
    variants: [
        { begin: keyPrefix + keyName + ":" },
        { begin: keyPrefix + '"' + keyName + '"' + ":" },
        { begin: keyPrefix + "'" + keyName + "'" + ":" }
    ]
};

const TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [
        { begin: '\{\{', end: '\}\}' }, // jinja templates Ansible
        { begin: '%\{', end: '\}' } // Ruby i18n
    ]
};

const STRING = {
    className: 'string',
    relevance: 0,
    variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /\S+/ }
    ],
    contains: [
        BACKSLASH_ESCAPE,
        TEMPLATE_VARIABLES
    ]
};

export const YAML: LanguageDef = {
    name: 'yaml',
    case_insensitive: true,
    aliases: ['yml', 'YAML', 'yaml'],
    contains: [
        KEY,
        {
            className: 'meta',
            begin: '^---\s*$',
            relevance: 10
        },
        { // multi line string
            className: 'string',
            begin: '[\\|>] *$',
            returnEnd: true,
            contains: STRING.contains,
            // very simple termination: next hash key
            end: KEY.variants[0].begin
        },
        { // Ruby/Rails erb
            begin: '<%[%=-]?', end: '[%-]?%>',
            subLanguage: 'ruby',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
        },
        { // data type
            className: 'type',
            begin: '!!' + UNDERSCORE_IDENT_RE,
        },
        { // fragment id &ref
            className: 'meta',
            begin: '&' + UNDERSCORE_IDENT_RE + '$',
        },
        { // fragment reference *ref
            className: 'meta',
            begin: '\\*' + UNDERSCORE_IDENT_RE + '$'
        },
        { // array listing
            className: 'bullet',
            begin: '^ *-',
            relevance: 0
        },
        HASH_COMMENT_MODE,
        {
            beginKeywords: LITERALS,
            keywords: { literal: LITERALS }
        },
        C_NUMBER_MODE,
        STRING
    ]
};
