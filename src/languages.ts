import { LanguageName, LanguageDef, CompiledLanguageDef } from './types';
import { compileLanguage } from './compile';

// Global internal variables used within the highlight.js library.
const languages: Record<LanguageName, LanguageDef | CompiledLanguageDef> = {};
const aliases: Record<LanguageName, LanguageName> = {};

function compiledLanguage(language: LanguageDef | CompiledLanguageDef): language is CompiledLanguageDef {
    return 'lexemesRe' in language;
}

export function registerLanguage(language: LanguageDef) {
    languages[language.name] = language;
    if (language.aliases) {
        for (const alias of language.aliases) {
            aliases[alias] = language.name;
        }
    }
}

export function registerLanguages(...languages: LanguageDef[]) {
    for (const language of languages) registerLanguage(language);
}

export function listLanguages(): LanguageName[] {
    return Object.keys(languages);
}

export function getLanguage(name: LanguageName): CompiledLanguageDef | undefined {
    name = (name || '').toLowerCase();
    name = aliases[name] || name;

    const language = languages[name];

    if (!language) {
        return undefined;
    }

    if (compiledLanguage(language)) {
        return language;
    }

    return languages[name] = compileLanguage(language);
}

export function compileLanguages() {
    for (const name in languages) {
        getLanguage(name);
    }
}
