import * as should from 'should';
import { tests } from './markup/index';
import { LanguageName, listLanguages, defaults, htmlRender, highlight } from '../src/highlight';

function testLanguageMode(language: LanguageName) {
    describe(`${language} mode`, () => {
        const lang_tests = tests[language];

        it(`should have tests`, () => {
            should(lang_tests).be.an.Object();
        });

        for (const test in lang_tests) {
            it(`${test} should markup`, () => {
                const [source, markup] = lang_tests[test];
                const result = highlight(defaults, htmlRender, language, source, false);

                result.value.trim().should.equal(markup.trim());
            });
        }
    });
}

describe('.highlight()', function() {
    const languages = listLanguages();

    languages.forEach(testLanguageMode);
});
