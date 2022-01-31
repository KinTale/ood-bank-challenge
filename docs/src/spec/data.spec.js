const Data = require('../data')


describe('Bank', () => {
    let data


    beforeEach(() => {
        data = new Data
    })

    //TEST 1

    it('returns error if not passing int in storing deposits', () => {
        const expected = 'Error'

        let error = data.storeCredit('applepie')
        expect(error).toEqual(expected)
        console.log('spec', data.debit)
    })


    //TEST 3
    it('returns error if not passing int in store withdrawls', () => {
        const expected = 'Error'

        let error = data. storeDebit('bagels')
        expect(error).toEqual(expected)
    })


    // TEST 5
    it("get total Balance", () => {
        const expected = [3550]

        data.storeCredit(2550)
        data.storeCredit(1550)
        data. storeDebit(550)
        data.totalBalance()
        expect(data.balance).toEqual(expected)
        console.log('spec', data.balance)
    })


})