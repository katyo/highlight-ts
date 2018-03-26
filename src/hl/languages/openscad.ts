/*
Language: OpenSCAD
Author: Dan Panzarella <alsoelp@gmail.com>
Description: OpenSCAD is a language for the 3D CAD modeling software of the same name.
Category: scientific
*/

import { SyntaxDef, LanguageDef } from '../types';
import {
    QUOTE_STRING_MODE,
    UNDERSCORE_TITLE_MODE,
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE
} from '../common';

const SPECIAL_VARS = {
    className: 'keyword',
    begin: '\\$(f[asn]|t|vp[rtd]|children)'
};

const LITERALS = {
    className: 'literal',
    begin: 'false|true|PI|undef'
};

const NUMBERS = {
    className: 'number',
    begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
    relevance: 0
};

const STRING: SyntaxDef = { ...QUOTE_STRING_MODE, illegal: undefined };

const PREPRO = {
    className: 'meta',
    keywords: { 'meta-keyword': 'include use' },
    begin: 'include|use <',
    end: '>'
};

const PARAMS: SyntaxDef = {
    className: 'params',
    begin: '\\(', end: '\\)',
    contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
};

const MODIFIERS = {
    begin: '[*!#%]',
    relevance: 0
};

const FUNCTIONS = {
    className: 'function',
    beginKeywords: 'module function',
    end: '\\=|\\{',
    contains: [PARAMS, UNDERSCORE_TITLE_MODE]
};

export const OpenSCAD: LanguageDef = {
    name: 'openscad',
    aliases: ['scad'],
    keywords: {
        keyword: 'function module include use for intersection_for if else \\%',
        literal: 'false true PI undef',
        built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
    },
    contains: [
        C_LINE_COMMENT_MODE,
        C_BLOCK_COMMENT_MODE,
        NUMBERS,
        PREPRO,
        STRING,
        SPECIAL_VARS,
        MODIFIERS,
        FUNCTIONS
    ]
};
