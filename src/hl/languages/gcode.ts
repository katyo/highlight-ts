/*
 Language: G-code (ISO 6983)
 Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
 Description: G-code syntax highlighter for Fanuc and other common CNC machine tool controls.
 */

import { SyntaxDef, LanguageDef } from '../types';
import {
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    COMMENT,
    C_NUMBER_MODE,
    C_NUMBER_RE,
    APOS_STRING_MODE,
    QUOTE_STRING_MODE,
} from '../common';

const GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';

const GCODE_CLOSE_RE = '\\%';

const GCODE_KEYWORDS =
    'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
    'EQ LT GT NE GE LE OR XOR';

const GCODE_START: SyntaxDef = {
    className: 'meta',
    begin: '([O])([0-9]+)'
};

const GCODE_CODE: SyntaxDef[] = [
    C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE,
    COMMENT(/\(/, /\)/),
    { ...C_NUMBER_MODE, begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + C_NUMBER_RE },
    { ...APOS_STRING_MODE, illegal: undefined },
    { ...QUOTE_STRING_MODE, illegal: undefined },
    {
        className: 'name',
        begin: '([G])([0-9]+\\.?[0-9]?)'
    },
    {
        className: 'name',
        begin: '([M])([0-9]+\\.?[0-9]?)'
    },
    {
        className: 'attr',
        begin: '(VC|VS|#)',
        end: '(\\d+)'
    },
    {
        className: 'attr',
        begin: '(VZOFX|VZOFY|VZOFZ)'
    },
    {
        className: 'built_in',
        begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
        end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
    },
    {
        className: 'symbol',
        variants: [
            {
                begin: 'N', end: '\\d+',
                illegal: '\\W'
            }
        ]
    }
];

export const GCode: LanguageDef = {
    name: 'gcode',
    aliases: ['nc'],
    // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
    // However, most prefer all uppercase and uppercase is customary.
    case_insensitive: true,
    lexemes: GCODE_IDENT_RE,
    keywords: GCODE_KEYWORDS,
    contains: [
        {
            className: 'meta',
            begin: GCODE_CLOSE_RE
        },
        GCODE_START,
        ...GCODE_CODE
    ]
};
