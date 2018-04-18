/*
Language: Haskell
Author: Jeremy Hull <sourdrums@gmail.com>
Contributors: Zena Treep <zena.treep@gmail.com>
Category: functional
*/

import { SyntaxDef, LanguageDef } from '../types';
import {
    COMMENT as COMMENT_,
    TITLE_MODE,
    QUOTE_STRING_MODE,
    C_NUMBER_MODE,
} from '../common';

const COMMENT: SyntaxDef = {
    variants: [
        COMMENT_('--', '$'),
        COMMENT_(
            '{-',
            '-}',
            {
                contains: ['self']
            }
        )
    ]
};

const PRAGMA = {
    className: 'meta',
    begin: '{-#', end: '#-}'
};

const PREPROCESSOR = {
    className: 'meta',
    begin: '^#', end: '$'
};

const CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
    relevance: 0
};

const LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [
        PRAGMA,
        PREPROCESSOR,
        { className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' },
        { ...TITLE_MODE, begin: '[_a-z][\\w\']*' },
        COMMENT
    ]
};

const RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
};

export const Haskell: LanguageDef = {
    name: 'haskell',
    aliases: ['hs'],
    keywords:
        'let in if then else case of where do module import hiding ' +
        'qualified type data newtype deriving class instance as default ' +
        'infix infixl infixr foreign export ccall stdcall cplusplus ' +
        'jvm dotnet safe unsafe family forall mdo proc rec',
    contains: [

        // Top-level constructions.

        {
            beginKeywords: 'module', end: 'where',
            keywords: 'module where',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
        },
        {
            begin: '\\bimport\\b', end: '$',
            keywords: 'import qualified as hiding',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
        },

        {
            className: 'class',
            begin: '^(\\s*)?(class|instance)\\b', end: 'where',
            keywords: 'class family instance where',
            contains: [CONSTRUCTOR, LIST, COMMENT]
        },
        {
            className: 'class',
            begin: '\\b(data|(new)?type)\\b', end: '$',
            keywords: 'data family type newtype deriving',
            contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
        },
        {
            beginKeywords: 'default', end: '$',
            contains: [CONSTRUCTOR, LIST, COMMENT]
        },
        {
            beginKeywords: 'infix infixl infixr', end: '$',
            contains: [C_NUMBER_MODE, COMMENT]
        },
        {
            begin: '\\bforeign\\b', end: '$',
            keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
                'dotnet safe unsafe',
            contains: [CONSTRUCTOR, QUOTE_STRING_MODE, COMMENT]
        },
        {
            className: 'meta',
            begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
        },

        // "Whitespaces".

        PRAGMA,
        PREPROCESSOR,

        // Literals and names.

        // TODO: characters.
        QUOTE_STRING_MODE,
        C_NUMBER_MODE,
        CONSTRUCTOR,
        { ...TITLE_MODE, begin: '^[_a-z][\\w\']*' },

        COMMENT,

        { begin: '->|<-' } // No markup, relevance booster
    ]
};
