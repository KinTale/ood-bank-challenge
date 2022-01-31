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


    //TEST 2
    it('returns error if not passing int in store withdrawls', () => {
        const expected = 'Error'

        let error = data.storeDebit('bagels')
        expect(error).toEqual(expected)
    })

})