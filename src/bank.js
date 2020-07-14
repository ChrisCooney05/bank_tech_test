import History from "./history.js";

class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
    this.STATEMENT_HEADER = "Date || Credit || Debit || Balance";
  }

  deposit(funds) {
    this.balance += funds;
    let date = this.getDate();
    this.history.deposit(date, funds, this.balance);
  }

  withdraw(funds) {
    this.balance -= funds;
    let date = this.getDate();
    this.history.withdraw(date, funds, this.balance);
  }

  returnHistory() {
    return this.history.returnTransactionHistory();
  }

  getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth();
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  statement() {
    console.log(`${this.STATEMENT_HEADER}`);
  }
}

export default Bank;
