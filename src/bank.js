/* eslint-disable no-undef */
const History = require("./history");

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
    let date = this.getDate();
    let balance = this.currentBalance();
    this.history.deposit(date, funds, balance);
  }

  withdraw(funds) {
    this.balance -= funds;
    let date = this.getDate();
    let balance = this.currentBalance();
    this.history.withdraw(date, funds, balance);
  }

  returnHistory() {
    return this.history.returnTransactionHistory();
  }

  getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  statement() {
    let result = [];
    let fullHistory = this.returnHistory();
    fullHistory.forEach((t) => {
      result.push(`\n${t[0]} || ${t[1]} || ${t[2]} || ${t[3]}`);
    });
    result = result.join("");
    console.log(`${this.STATEMENT_HEADER}${result}`);
  }
}

module.exports = Bank;
