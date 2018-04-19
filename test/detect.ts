import * as should from 'should';
import { tests } from './detect/index';
import { LanguageName, listLanguages, defaults, htmlRender, highlightAuto } from '../src/highlight';

function testAutoDetection(language: LanguageName) {
    describe(`${language} mode`, () => {
        const lang_tests = tests[language];

        it(`should have tests`, () => {
            should(lang_tests).be.an.Object()
        });

        for (const test in lang_tests) {
            it(`${test} should be detected`, function() {
                const content = lang_tests[test];
                const result = highlightAuto(defaults, htmlRender, content);

                //console.log(result.value);
                result.language.should.equal(language);
            });
        }
    });
}

describe('.highlightAuto()', function() {
    const languages = listLanguages();

    languages.forEach(testAutoDetection);
});
