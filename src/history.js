/* eslint-disable no-undef */
const Transaction = require("./transaction");
class History {
  constructor() {
    this.transactions = [];
    this.STATEMENT_HEADER = "Date || Credit || Debit || Balance";
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

  _returnTransactionHistory() {
    return this.transactions;
  }

  _pushStatementToArray() {
    let result = [];
    let fullHistory = this._returnTransactionHistory();
    fullHistory.forEach((t) => {
      let transaction = t.returnSingleTransaction();
      result.push(`\n${transaction}`);
    });
    return result;
  }

  logStatement() {
    let result = this._pushStatementToArray();
    result = result.join("");
    console.log(`${this.STATEMENT_HEADER}${result}`);
  }

  _formatInteger(integer) {
    return integer.toFixed(2);
  }
}

module.exports = History;
