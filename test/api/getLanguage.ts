import * as should from 'should';

import { registerLanguages, getLanguage, CPlusPlus, Python, TypeScript, Markdown } from '../../src/highlight';

registerLanguages(CPlusPlus, Python, TypeScript, Markdown);

describe('.getLanguage()', function() {
    it('should get an existing language', function() {
        const result = getLanguage('python');

        result.should.be.instanceOf(Object);
    });

    it('should be case insensitive', function() {
        const result = getLanguage('pYTHOn');

        result.should.be.instanceOf(Object);
    });

    it('should get using language alias', function() {
        const result = getLanguage('py');

        result.should.be.instanceOf(Object);
    });

    it('should return undefined', function() {
        const result = getLanguage('-impossible-');

        should.strictEqual(result, undefined);
    });

    it('should not break on undefined', function() {
        const result = getLanguage(undefined);

        should.strictEqual(result, undefined);
    });
});
