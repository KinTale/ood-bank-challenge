/* eslint-disable no-undef */
const Bank = require('../bank')

describe('Bank', () => {
    let bank
    beforeEach(() => {
        bank = new Bank
    })
    //TEST 1
    it('credit 1000 ammount', () => {
        const expected = 1000

        bank.addCredit(1000, '10-01-2012')
        const deposit = bank.getCredits()
        expect(deposit).toEqual(expected)
    })


    //TEST 2
    it('debit 700 ammount', () => {
        const expected = 500
        bank.debitAccount(500, '14-01-2012')

        const deposit = bank.getDebits()
        expect(deposit).toEqual(expected)
    })

    //TEST 3
    it('calculate balances', () => {
        const expected = bank.balance = 2500

        bank.debitAccount(500, '14-01-2012')
        bank.addCredit(1000, '10-01-2012')
        bank.addCredit(2000, '13-01-2012')

        const balance = bank.balance
        expect(balance).toEqual(expected)
    })













})