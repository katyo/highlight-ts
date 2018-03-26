/*
Language: JSON
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Category: common, protocols
*/

import { LanguageDef } from '../types';
import { QUOTE_STRING_MODE, C_NUMBER_MODE, BACKSLASH_ESCAPE } from '../common';

const LITERALS = { literal: 'true false null' };

const TYPES = [
    QUOTE_STRING_MODE,
    C_NUMBER_MODE
];

const VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
};

const OBJECT = {
    begin: '{', end: '}',
    contains: [
        {
            className: 'attr',
            begin: /"/, end: /"/,
            contains: [BACKSLASH_ESCAPE],
            illegal: '\\n',
        },
        { ...VALUE_CONTAINER, begin: /:/ }
    ],
    illegal: '\\S'
};

const ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [{ ...VALUE_CONTAINER }], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
};

TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);

export const JSON: LanguageDef = {
    name: 'json',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
};
