/*
Language: Makefile
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Joël Porquet <joel@porquet.org>
Category: common
*/

import { LanguageDef } from '../types';
import { UNDERSCORE_IDENT_RE, BACKSLASH_ESCAPE, HASH_COMMENT_MODE } from '../common';

/* Variables: simple (eg $(var)) and special (eg $@) */
const VARIABLE = {
    className: 'variable',
    variants: [
        {
            begin: '\\$\\(' + UNDERSCORE_IDENT_RE + '\\)',
            contains: [BACKSLASH_ESCAPE],
        },
        {
            begin: /\$[@%<?\^\+\*]/
        },
    ]
};

/* Quoted string with variables inside */
const QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
        BACKSLASH_ESCAPE,
        VARIABLE,
    ]
};

/* Function: $(func arg,...) */
const FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/, end: /\)/,
    keywords: {
        built_in:
            'subst patsubst strip findstring filter filter-out sort ' +
            'word wordlist firstword lastword dir notdir suffix basename ' +
            'addsuffix addprefix join wildcard realpath abspath error warning ' +
            'shell origin flavor foreach if or and call eval file value',
    },
    contains: [
        VARIABLE,
    ]
};

/* Variable assignment */
const VAR_ASSIG = {
    begin: '^' + UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
    illegal: '\\n',
    returnBegin: true,
    contains: [
        {
            begin: '^' + UNDERSCORE_IDENT_RE, end: '[:+?]?=',
            excludeEnd: true,
        }
    ]
};

/* Meta targets (.PHONY) */
const META = {
    className: 'meta',
    begin: /^\.PHONY:/, end: /$/,
    keywords: { 'meta-keyword': '.PHONY' },
    lexemes: /[\.\w]+/
};

/* Targets */
const TARGET = {
    className: 'section',
    begin: /^[^\s]+:/, end: /$/,
    contains: [VARIABLE,]
};

export const Makefile: LanguageDef = {
    name: 'makefile',
    aliases: ['mk', 'mak'],
    keywords:
        'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
        'include -include sinclude override export unexport private vpath',
    lexemes: /[\w-]+/,
    contains: [
        HASH_COMMENT_MODE,
        VARIABLE,
        QUOTE_STRING,
        FUNC,
        VAR_ASSIG,
        META,
        TARGET,
    ]
};
