class Print {
    constructor(transactions) {
        this.statement = transactions
    }
    printBalance() {
        return console.table(this.statement)
    }
}
// eslint-disable-next-line no-undef
module.exports = Print
