/*
Language: Less
Author:   Max Mikhailov <seven.phases.max@gmail.com>
Category: css
*/

import { LanguageDef, SyntaxDef } from '../types';
import {
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    CSS_NUMBER_MODE,
} from '../common';

const IDENT_RE = '[\\w-]+'; // yes, Less identifiers may begin with a digit
const INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

/* Generic Modes */

const RULES: SyntaxDef[] = [], VALUE: SyntaxDef[] = []; // forward def. for recursive modes

const STRING_MODE = (c: string) => ({
    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
    className: 'string', begin: '~?' + c + '.*?' + c
});

const IDENT_MODE = (className: string, begin: string, relevance?: number) =>
    ({ className, begin, relevance });

const PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
};

// generic Less highlighter (used almost everywhere except selectors):
VALUE.push(
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    STRING_MODE("'"),
    STRING_MODE('"'),
    CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
    {
        begin: '(url|data-uri)\\(',
        starts: { className: 'string', end: '[\\)\\n]', excludeEnd: true }
    },
    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
    PARENS_MODE,
    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
    IDENT_MODE('variable', '@{' + IDENT_RE + '}'),
    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
    },
    {
        className: 'meta',
        begin: '!important'
    }
);

const VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{', end: '}', contains: RULES
});

const MIXIN_GUARD_MODE = {
    beginKeywords: 'when', endsWithParent: true,
    contains: [{ beginKeywords: 'and not' }, ...VALUE] // using this form to override VALUE’s 'function' match
};

/* Rule-Level Modes */

const RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
    relevance: 0,
    contains: [
        {
            className: 'attribute',
            begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
            starts: {
                endsWithParent: true, illegal: '[<=$]',
                relevance: 0,
                contains: VALUE
            }
        }
    ]
};

const AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: { end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0 }
};

// variable definitions and calls
const VAR_RULE_MODE = {
    className: 'variable',
    variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        { begin: '@' + IDENT_RE + '\\s*:', relevance: 15 },
        { begin: '@' + IDENT_RE }
    ],
    starts: { end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS }
};

const SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
        begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
    }, {
        begin: INTERP_IDENT_RE, end: '{'
    }],
    returnBegin: true,
    returnEnd: true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [
        C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE,
        MIXIN_GUARD_MODE,
        IDENT_MODE('keyword', 'all\\b'),
        IDENT_MODE('variable', '@{' + IDENT_RE + '}'),     // otherwise it’s identified as tag
        IDENT_MODE('selector-tag', INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
        IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
        IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
        IDENT_MODE('selector-tag', '&', 0),
        { className: 'selector-attr', begin: '\\[', end: '\\]' },
        { className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
        { begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS }, // argument list of parametric mixins
        { begin: '!important' } // eat !important after mixin call or it will be colored as tag
    ]
};

RULES.push(
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    AT_RULE_MODE,
    VAR_RULE_MODE,
    RULE_MODE,
    SELECTOR_MODE
);

export const Less: LanguageDef = {
    name: 'less',
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
};
