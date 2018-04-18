/*
Language: Nix
Author: Domen Kožar <domen@dev.si>
Description: Nix functional language. See http://nixos.org/nix
*/

import { KeywordsDef, SyntaxDef, LanguageDef } from '../types';
import {
    NUMBER_MODE,
    HASH_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
} from '../common';

const NIX_KEYWORDS: KeywordsDef = {
    keyword:
        'rec with let in inherit assert if else then',
    literal:
        'true false or and null',
    built_in:
        'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
        'toString derivation'
};

const ANTIQUOTE: SyntaxDef = {
    className: 'subst',
    begin: /\$\{/,
    end: /}/,
    keywords: NIX_KEYWORDS
};

const ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
    relevance: 0,
    contains: [
        {
            className: 'attr',
            begin: /\S+/
        }
    ]
};

const STRING = {
    className: 'string',
    contains: [ANTIQUOTE],
    variants: [
        { begin: "''", end: "''" },
        { begin: '"', end: '"' }
    ]
};

const EXPRESSIONS = [
    NUMBER_MODE,
    HASH_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    STRING,
    ATTRS
];

ANTIQUOTE.contains = EXPRESSIONS;

export const Nix: LanguageDef = {
    name: 'nix',
    aliases: ["nixos"],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
};
