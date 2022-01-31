const Bank = require("./bank")

// eslint-disable-next-line no-unused-vars
class Data {
    constructor(date) {
        this.date = date
        this.credit = 0
        this.debit = 0
        this.balance = 0
    }
    storeCredit(amount) {
        if (!isNaN(amount)) {
            return this.credit = amount 
        } return 'Error'
    }

    storeDebit(amount) {
        if (!isNaN(amount)) {
            return this.debit = amount
        } return 'Error'
    }

    getCredit() {
        return this.credit
    }



}

// eslint-disable-next-line no-undef
module.exports = Data