export type LanguageName = string;
export type TestName = string;
export type TestSource = string;
export type TestMarkup = string;

export const tests: Record<LanguageName, Record<TestName, [TestSource, TestMarkup]>> = {
    'accesslog': require('./accesslog'),
    'bash': require('./bash'),
    'cmake': require('./cmake'),
    'coffeescript': require('./coffeescript'),
    'cplusplus': require('./cplusplus'),
    'css': require('./css'),
    'diff': require('./diff'),
    'dockerfile': require('./dockerfile'),
    'd': require('./d'),
    'gcode': require('./gcode'),
    'glsl': require('./glsl'),
    'haskell': require('./haskell'),
    'haxe': require('./haxe'),
    'http': require('./http'),
    'ini': require('./ini'),
    'javascript': require('./javascript'),
    'java': require('./java'),
    'json': require('./json'),
    'lua': require('./lua'),
    'lisp': require('./lisp'),
    'less': require('./less'),
    'llvm': require('./llvm'),
    'makefile': require('./makefile'),
    'markdown': require('./markdown'),
    'matlab': require('./matlab'),
    'maxima': require('./maxima'),
    'nginx': require('./nginx'),
    'nix': require('./nix'),
    'openscad': require('./openscad'),
    'php': require('./php'),
    'python': require('./python'),
    'rust': require('./rust'),
    'scheme': require('./scheme'),
    'scss': require('./scss'),
    'shell': require('./shell'),
    'sql': require('./sql'),
    'tex': require('./tex'),
    'typescript': require('./typescript'),
    'xml': require('./xml'),
    'yaml': require('./yaml'),
};