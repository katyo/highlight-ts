import "should";

import { C_NUMBER_RE } from '../../src/highlight';

const pattern = new RegExp(`${C_NUMBER_RE}$`);

describe('.C_NUMBER_RE', function() {
    it('should match regular numbers', function() {
        for (let i = 0; i < 1001; i += 1) {
            i.toString().should.match(pattern);
        }
    });

    it('should match decimals', function() {
        for (let i = 0; i < 1.001; i += 0.001) { // decimals
            i.toString().should.match(pattern);
        }

        const noLeadingZero = ['.1234', '.5206', '.0002', '.9998'];

        noLeadingZero.should.matchEach(pattern);
    });

    it('should match hex numbers', function() {
        const numbers = [
            '0xbada55', '0xfa1755', '0x45362e', '0xfedcba',
            '0x123456', '0x00000f', '0xfff000', '0xf0e1d2'
        ];

        numbers.should.matchEach(pattern);
    });

    it('should not match hex numbers greater than "f"', function() {
        const numbers = ['0xgada55', '0xfh1755', '0x45i62e'];

        numbers.should.not.matchEach(pattern);
    });

    it('should not match binary numbers', function() {
        const numbers = ['0b0101', '0b1100', '0b1001'];

        numbers.should.not.matchEach(pattern);
    });
});
