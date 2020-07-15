const History = require("./src/history");

// eslint-disable-next-line no-unused-vars
class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
  }

  currentBalance() {
    return this.balance;
  }

  deposit(funds) {
    this.balance += funds;
    let date = this._getDate();
    let balance = this.currentBalance();
    this.history.deposit(date, funds, balance);
  }

  withdraw(funds) {
    this.balance -= funds;
    let date = this._getDate();
    let balance = this.currentBalance();
    this.history.withdraw(date, funds, balance);
  }

  statement() {
    this.history.logStatement();
  }

  _getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }
}
// eslint-disable-next-line no-unused-vars
let bank = new Bank();
