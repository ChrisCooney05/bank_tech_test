const History = require("./src/history");

// eslint-disable-next-line no-unused-vars
class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
    this.STATEMENT_HEADER = "Date || Credit || Debit || Balance";
  }

  currentBalance() {
    return this.balance;
  }

  deposit(funds) {
    this.balance += funds;
    let date = this._getDate();
    let balance = this.currentBalance();
    this.history._deposit(date, funds, balance);
  }

  withdraw(funds) {
    this.balance -= funds;
    let date = this._getDate();
    let balance = this.currentBalance();
    this.history._withdraw(date, funds, balance);
  }

  _returnHistory() {
    return this.history._returnTransactionHistory();
  }

  _getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  statement() {
    let result = [];
    let fullHistory = this._returnHistory();
    fullHistory.forEach((t) => {
      result.push(`\n${t[0]} || ${t[1]} || ${t[2]} || ${t[3]}`);
    });
    result = result.join("");
    console.log(`${this.STATEMENT_HEADER}${result}`);
  }
}
// eslint-disable-next-line no-unused-vars
let bank = new Bank();
