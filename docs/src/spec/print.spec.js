const Print = require('../print')
const Bank = require('../bank')


describe('print', () => {
    let bank
    beforeEach(() => {
        bank = new Bank()

    })
    //TEST 1
    it('Print statement', () => {

        const transactions = [
            bank.debitAccount(500, '14-01-2012'),
            bank.addCredit(2000, '13-01-2012'),
            bank.addCredit(1000, '10-01-2012')
        ]
        let print = new Print(transactions)

        const expected = print.printBalance()
        /* what the console prints:
        ┌─────────┬──────────────┬────────┬───────┬─────────┐
        │ (index) │     date     │ credit │ debit │ balance │
        ├─────────┼──────────────┼────────┼───────┼─────────┤
        │    0    │ '14-01-2012' │   0    │  500  │  2500   │
        │    1    │ '13-01-2012' │  2000  │   0   │  3000   │
        │    2    │ '10-01-2012' │  1000  │   0   │  1000   │ 
        └─────────┴──────────────┴────────┴───────┴─────────┘
        */

        const statement = print.printBalance()
        expect(statement).toEqual(expected)
    })


})
