import 'should';
import { NUMBER_RE } from '../../src/highlight';

const pattern = new RegExp(`${NUMBER_RE}$`);

describe('.NUMBER_RE', function() {
    it('should match regular numbers and decimals', function() {
        for (let i = 0; i < 1001; i += 1) { // integer
            i.toString().should.match(pattern);
        }

        for (let i = 0; i < 1.001; i += 0.001) { // decimal
            i.toString().should.match(pattern);
        }

        const noLeadingZero = ['.1234', '.5206', '.0002', '.9998'];

        noLeadingZero.should.matchEach(pattern);
    });

    it('should not match hex or binary numbers', function() {
        const numbers = ['0xbada55', '0xfa1755', '0x45362e'
            , '0b0101', '0b1100', '0b1001'
        ];

        numbers.should.not.matchEach(pattern);
    });
});
