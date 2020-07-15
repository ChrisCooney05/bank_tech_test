/* eslint-disable no-undef */
const Transaction = require("./transaction");
class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    let singleTransaction = new Transaction(date, fundsFloat, "", balanceFloat);
    this.transactions.unshift(singleTransaction);
  }

  withdraw(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    let singleTransaction = new Transaction(date, "", fundsFloat, balanceFloat);
    this.transactions.unshift(singleTransaction);
  }

  returnTransactionHistory() {
    return this.transactions;
  }

  _formatInteger(integer) {
    return integer.toFixed(2);
  }
}

module.exports = History;
