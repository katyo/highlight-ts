/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
*/

import { LanguageDef } from '../types';

export const Shell: LanguageDef = {
    name: 'shell',
    aliases: ['console'],
    contains: [
        {
            className: 'meta',
            begin: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
            starts: {
                end: '$', subLanguage: 'bash'
            }
        }
    ]
};
