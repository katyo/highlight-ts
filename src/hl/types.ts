export type LanguageName = string;

export type StringRegExp = string | RegExp;

export type SyntaxDef = Partial<FullSyntaxDef>;

export type SyntaxDefOrRef = SyntaxDef | 'self';

export type KeywordsDef = string | KeywordsGroupDef;

export type KeywordsGroupDef = Partial<Record<KeywordGroup, string>>;

export interface LanguageDef extends SyntaxDef {
    // Full language name
    name: LanguageName;

    // A list of additional names (besides the canonical
    // one given by the filename) that can be used to identify
    // a language in HTML classes and in a call to getLanguage.
    aliases?: LanguageName[];

    // Case insensitivity of language keywords and regexps.
    // Used only on the top-level mode.
    case_insensitive?: boolean;
}

export interface FullSyntaxDef {
    // The name of the mode. It is used as a class name
    // in HTML markup.
    //
    // Multiple modes can have the same name. This is useful
    // when a language has multiple variants of syntax
    // for one thing like string in single or double quotes.
    className: string; // the name of css class

    // Regular expression starting a mode. For example
    // a single quote for strings or two forward slashes
    // for C-style comments. If absent, begin defaults
    // to a regexp that matches anything, so the mode
    // starts immediately.
    begin: StringRegExp;

    // Regular expression ending a mode. For example
    // a single quote for strings or “$” (end of line)
    // for one-line comments.
    //
    // It’s often the case that a beginning regular expression
    // defines the entire mode and doesn’t need any special
    // ending. For example a number can be defined with begin:
    // "\\b\\d+" which spans all the digits.
    //
    // If absent, end defaults to a regexp that matches anything,
    // so the mode ends immediately.
    //
    // Sometimes a mode can end not by itself but implicitly with
    // its containing (parent) mode. This is achieved with
    // `endsWithParent` attribute.
    end: StringRegExp;

    // Used instead of begin for modes starting with keywords
    // to avoid needless repetition.
    //
    // Unlike the keywords attribute, this one allows only
    // a simple list of space separated keywords. If you do need
    // additional features of keywords or you just need
    // more keywords for this mode you may include keywords
    // along with `beginKeywords`.
    beginKeywords: string;

    // A flag showing that a mode ends when its parent ends.
    //
    // This is best demonstrated by example. In CSS syntax
    // a selector has a set of rules contained within symbols
    // “{” and “}”. Individual rules separated by ”;” but
    // the last one in a set can omit the terminating semicolon.
    endsWithParent: boolean;

    // Forces closing of the parent mode right after
    // the current mode is closed.
    //
    // This is used for modes that don’t have an easily expressible
    // ending lexeme but instead could be closed after
    // the last interesting sub-mode is found.
    endsParent: boolean;

    // A regular expression that extracts individual lexemes
    // from language text to find keywords among them. Default value
    // is `IDENT_RE` which works for most languages.
    lexemes: StringRegExp;

    // Keyword definition comes in two forms
    keywords: KeywordsDef;

    // A regular expression that defines symbols illegal
    // for the mode. When the parser finds a match
    // for illegal expression it immediately drops parsing
    // the whole language altogether.
    illegal: StringRegExp;

    // Exclude beginning or ending lexemes out of mode’s
    // generated markup. For example in CSS syntax
    // a rule ends with a semicolon. However visually
    // it’s better not to color it as the rule contents.
    // Having excludeEnd: true forces a <span> element
    // for the rule to close before the semicolon.
    excludeBegin: boolean;
    excludeEnd: boolean;

    // Returns just found beginning lexeme back into parser.
    // This is used when beginning of a sub-mode is a complex
    // expression that should not only be found within
    // a parent mode but also parsed according to the rules
    // of a sub-mode.
    //
    // Since the parser is effectively goes back it’s quite possible
    // to create a infinite loop here so use with caution!
    returnBegin: boolean;

    // Returns just found ending lexeme back into parser.
    // This is used for example to parse Javascript embedded
    // into HTML. A Javascript block ends with the HTML closing tag
    // </script> that cannot be parsed with Javascript rules.
    // So it is returned back into its parent HTML mode that knows
    // what to do with it.
    //
    // Since the parser is effectively goes back it’s quite possible
    // to create a infinite loop here so use with caution!
    returnEnd: boolean;

    // The list of sub-modes that can be found inside the mode.
    // For detailed explanation see Language definition guide.
    contains: SyntaxDefOrRef[];

    // The name of the mode that will start right after
    // the current mode ends. The new mode won’t be contained
    // within the current one.
    //
    // Currently this attribute is used to highlight Javascript and CSS
    // contained within HTML. Tags <script> and <style> start sub-modes
    // that use another language definition to parse their contents
    // (see subLanguage).
    starts: SyntaxDef;

    // Modification to the main definitions of the mode,
    // effectively expanding it into several similar modes
    // each having all the attributes from the main definition
    // augmented or overridden by the variants.
    variants: SyntaxDef[];

    // Highlights the entire contents of the mode with another language.
    subLanguage: LanguageName | LanguageName[];

    // Skips any markup processing for the mode ensuring
    // that it remains a part of its parent buffer along with
    // the starting and the ending lexemes. This works in conjunction
    // with the parent’s subLanguage when it requires complex parsing.
    skip: boolean;

    // Language detection relevance
    relevance: number; // usually: 0 .. 10, default: 1
}

export type CompiledKeywords = Partial<Record<KeywordGroup, [string, number]>>;

export interface CompiledSyntaxDef {
    className?: string;
    keywords?: CompiledKeywords;
    contains: CompiledSyntaxDef[];

    terminators: RegExp;
    beginRe?: RegExp;
    endRe?: RegExp;
    lexemesRe: RegExp;
    illegalRe?: RegExp;

    parent?: CompiledSyntaxDef;
    starts?: CompiledSyntaxDef;

    endsParent?: true;
    endsWithParent?: true;

    skip?: true;

    excludeBegin?: true;
    excludeEnd?: true;

    returnBegin?: true;
    returnEnd?: true;

    relevance: number;
}

export interface CompiledLanguageDef extends CompiledSyntaxDef {
    case_insensitive?: true;
    subLanguage?: LanguageName | LanguageName[];
}

export interface Result<Output> {
    language: LanguageName;
    relevance: number;
    value: Output;
    second_best?: Result<Output>;
    top?: CompiledLanguageDef;
}

export interface Renderer<Output> {
    text(chunk: string): Output;
    wrap(className: string, chunk: Output): Output;
    join(chunks: Output[]): Output;
}

export interface Options {
    classPrefix: string;
    tabReplace?: string;
    useBr: boolean;
    languages?: LanguageName[];
}

export interface Highlighter<Output> {
    (source: string, language?: LanguageName | LanguageName[]): Result<Output>;
}

// Supported keyword groups (classes)
export type KeywordGroup
    = KeywordGroupGeneral
    | KeywordGroupMeta
    | KeywordGroupTagsAttrsConfs
    | KeywordGroupMarkup
    | KeywordGroupStyles
    | KeywordGroupTemplates
    | KeywordGroupDiff
    | '_' // bash mode
    ;

// General-purpose
export type KeywordGroupGeneral
    = 'keyword'           // keyword in a regular Algol-style language
    | 'built_in'          // built-in or library object (constant, class, function)
    | 'type'              // user-defined type in a language with first-class syntactically significant types, like Haskell
    | 'literal'           // special identifier for a built-in value (“true”, “false”, “null”)
    | 'number'            // number, including units and modifiers, if any.
    | 'regexp'            // literal regular expression
    | 'string'            // literal string, character
    | 'subst'             // parsed section inside a literal string
    | 'symbol'            // symbolic constant, interned string, goto label
    | 'class'             // class or class-level declaration (interfaces, traits, modules, etc)
    | 'function'          // function or method declaration
    | 'title'             // name of a class or a function at the place of declaration
    | 'params'            // block of function arguments (parameters) at the place of declaration
    ;

// Meta
export type KeywordGroupMeta
    = 'comment'           // comment
    | 'doctag'            // documentation markup within comments
    | 'meta'              // flags, modifiers, annotations, processing instructions, preprocessor directive, etc
    | 'meta-keyword'      // keyword or built -in within meta construct
    | 'meta-string'       // string within meta construct
    ;

// Tags, attributes, configs
export type KeywordGroupTagsAttrsConfs
    = 'section'           // heading of a section in a config file, heading in text markup
    | 'tag'               // XML / HTML tag
    | 'name'              // name of an XML tag, the first word in an s - expression
    | 'builtin-name'      // s - expression name from the language standard library
    | 'attr'              // name of an attribute with no language defined semantics (keys in JSON, setting names in .ini), also sub - attribute within another highlighted object, like XML tag
    | 'attribute'         // name of an attribute followed by a structured value part, like CSS properties
    | 'variable'          // variable in a config or a template file, environment var expansion in a script
    ;

// Markup
export type KeywordGroupMarkup
    = 'bullet'            // list item bullet in text markup
    | 'code'              // code block in text markup
    | 'emphasis'          // emphasis in text markup
    | 'strong'            // strong emphasis in text markup
    | 'formula'           // mathematical formula in text markup
    | 'link'              // hyperlink in text markup
    | 'quote'             // quotation in text markup
    ;

// CSS
export type KeywordGroupStyles
    = 'selector-tag'      // tag selector in CSS
    | 'selector-id'       // #id selector in CSS
    | 'selector-class'    // .class selector in CSS
    | 'selector-attr'     // [attr] selector in CSS
    | 'selector-pseudo'   // : pseudo selector in CSS
    ;

// Templates
export type KeywordGroupTemplates
    = 'template-tag'      // tag of a template language
    | 'template-variable' // variable in a template language
    ;

// Diff
export type KeywordGroupDiff
    = 'addition'          // added or changed line in a diff
    | 'deletion'          // deleted line in a diff
    ;
