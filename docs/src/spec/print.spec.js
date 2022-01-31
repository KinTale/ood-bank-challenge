const Print = require('../print')
const Bank = require('../bank')
const Data = require('../data')

describe('print', () => {
    let print
    let bank
    let data
    beforeEach(() => {
        print = new Print
        bank = new Bank 
        data = new Data
    })

    //TEST 1

    it('Print statement', () => {
        const expected = 'Error'
        


        bank. addCredit(1000, '10-01-2012')
        bank. addCredit(2000, '13-01-2012')
        bank.debitAccount(500, '14-01-2012')
        bank.addBalance()
        console.log('spc',bank.transactions)
        let statement = print.printBalance()
        expect(statement).toEqual(expected)
    })










})
