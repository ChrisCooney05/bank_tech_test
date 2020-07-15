/* eslint-disable no-undef */
class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this.transactions.push([date, fundsFloat, "", balanceFloat]);
  }

  withdraw(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this.transactions.push([date, "", fundsFloat, balanceFloat]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }

  _formatInteger(integer) {
    return integer.toFixed(2);
  }
}

module.exports = History;
