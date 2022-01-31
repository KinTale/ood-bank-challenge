const Bank = require("./bank")

class Print {
    constructor(){
    this.statement = []
}
    printBalance(){
        let statement = new Bank()
        return statement.console.table(statement.transactions)

    }



}
// eslint-disable-next-line no-undef
module.exports = Print