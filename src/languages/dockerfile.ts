/*
Language: Dockerfile
Requires: bash.js
Author: Alexis Hénaut <alexis@henaut.net>
Description: language definition for Dockerfile files
Category: config
*/

import { LanguageDef } from '../types';
import {
    HASH_COMMENT_MODE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
    NUMBER_MODE,
} from '../common';

export const Dockerfile: LanguageDef = {
    name: 'dockerfile',
    aliases: ['docker'],
    case_insensitive: true,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [
        HASH_COMMENT_MODE,
        APOS_STRING_MODE,
        QUOTE_STRING_MODE,
        NUMBER_MODE,
        {
            beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
            starts: {
                end: /[^\\]\n/,
                subLanguage: 'bash'
            }
        }
    ],
    illegal: '</'
};
