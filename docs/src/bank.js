const Data = require("./data")

class Bank {
    constructor() {
        this.transactions = []
    }

    addCredit(amount, date) {
        const transaction = new Data(date)
        transaction.storeCredit(amount)
        this.transactions.push(transaction)
        for (let transaction of this.transactions) { transaction.balance += amount }
        return transaction
    }

    debitAccount(amount, date) {
        const transaction = new Data(date)
        transaction.storeDebit(amount)
        this.transactions.push(transaction)
        for (let transaction of this.transactions) { transaction.balance -= amount }
        return transaction
    }
}

// eslint-disable-next-line no-undef
module.exports = Bank



