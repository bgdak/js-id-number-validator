///<reference path='../dist/amd/IDValidators'/>

import * as assert from 'assert';

const IDValidators = require('../dist/commonjs');

describe('IDValidators', () => {
    beforeEach(function () {
    });

    describe('#getValidator', () => {
        it('should return a function.', () => {
            const validator = IDValidators.getValidator('SG', 'NRIC');
            assert.equal(typeof validator, 'function');
        });
    });
});