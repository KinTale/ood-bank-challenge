const Data = require("./data")

class Bank {
    constructor() {
        this.transactions = []
    }

    addCredit(amount, date) {
        const transaction = new Data(date)
        transaction.storeCredit(amount)
        this.transactions.push(transaction)
        return transaction
    }

    debitAccount(amount, date) {
        const transaction = new Data(date)
        transaction.storeDebit(amount)
        this.transactions.push(transaction)
        return transaction
    }

    getCredits() {
        // const transaction = new Data()
        let getCredits = this.transactions.reduce((total, credits) => {
            total += credits.credit
            return total
        }, 0)
        return getCredits
    }

    getDebits() {
        let getDebits = this.transactions.reduce((total, debits) => {
            total += debits.debit
            return total}, 0)
        return getDebits
    }

   getBalance() {
        let totalBalance
        const totalCredit = this.getCredits()
        const totalDebit = this.getDebits()
        totalBalance = totalCredit - totalDebit
        return totalBalance
    }

    addBalance(){
      //  this.transactions.sort((a, b) =>{
         //   a.date - b.date
       // })
        for( let i = 0; i < this.transactions.length; i++){
           this.transactions[i].balance += this.getCredits()
           this.transactions[i].balance -= this.getDebits()
        }
    }
}
// eslint-disable-next-line no-undef
module.exports = Bank