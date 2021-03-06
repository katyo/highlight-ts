/*
Language: HTTP
Description: HTTP request and response headers with automatic body highlighting
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common, protocols
*/

import { LanguageDef } from '../types';

const VERSION = 'HTTP/[0-9\\.]+';

export const HTTP: LanguageDef = {
    name: 'http',
    aliases: ['https'],
    illegal: '\\S',
    contains: [
        {
            begin: '^' + VERSION, end: '$',
            contains: [
                {
                    className: 'number',
                    begin: '\\b\\d{3}\\b'
                },
                {
                    className: 'string',
                    begin: '\\b[A-Za-z]+',
                    end: '$',
                },
            ]
        },
        {
            begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
            contains: [
                {
                    className: 'string',
                    begin: ' ', end: ' ',
                    excludeBegin: true, excludeEnd: true
                },
                {
                    begin: VERSION,
                },
                {
                    className: 'keyword',
                    begin: '[A-Z]+'
                }
            ]
        },
        {
            className: 'attribute',
            begin: '^\\w', end: ': ', excludeEnd: true,
            illegal: '\\n|\\s|=',
            starts: { end: '$', relevance: 0 }
        },
        {
            begin: '\\n\\n',
            starts: { subLanguage: [], endsWithParent: true }
        }
    ]
};
