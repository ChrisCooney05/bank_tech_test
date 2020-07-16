/* eslint-disable no-undef */
const Transaction = require("./transaction");
class History {
  constructor() {
    this.transactions = [];
    this.STATEMENT_HEADER = "date || credit || debit || balance";
  }

  deposit(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, fundsFloat, "", balanceFloat);
  }

  withdraw(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, "", fundsFloat, balanceFloat);
  }

  _makeTransactionInstance(date, credit, debit, balance) {
    let singleTransaction = new Transaction(date, credit, debit, balance);
    this.transactions.push(singleTransaction);
  }

  _pushStatementToArray() {
    let result = [];
    let fullHistory = this.transactions.reverse();
    fullHistory.forEach((t) => {
      let transaction = t.toString();
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
