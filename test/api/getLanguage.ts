import * as should from 'should';

import { getLanguage } from '../../src/highlight';

describe('.getLanguage()', () => {
    it('should get an existing language', () => {
        const result = getLanguage('python');

        should(result).be.instanceOf(Object);
    });

    it('should be case insensitive', () => {
        const result = getLanguage('pYTHOn');

        should(result).be.instanceOf(Object);
    });

    it('should get using language alias', () => {
        const result = getLanguage('py');

        should(result).be.instanceOf(Object);
    });

    it('should return undefined', () => {
        const result = getLanguage('-impossible-');

        should.strictEqual(result, undefined);
    });
});
