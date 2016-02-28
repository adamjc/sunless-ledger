'use strict';

const ledger = require('../ledger.js');

describe("The Ledger", () => {
    describe("Searching", () => {
        it("Can Be Searched By Name", () => {
            let london = ledger.find('London');
            expect(typeof london).toEqual('object');
        });
    });
});
