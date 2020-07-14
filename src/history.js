/* eslint-disable no-undef */
class History {
  constructor() {
    this.transactions = [];
  }

  _deposit(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this.transactions.push([date, fundsFloat, "", balanceFloat]);
  }

  _withdraw(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this.transactions.push([date, "", fundsFloat, balanceFloat]);
  }

  _returnTransactionHistory() {
    return this.transactions;
  }

  _formatInteger(integer) {
    return integer.toFixed(2);
  }
}

module.exports = History;
