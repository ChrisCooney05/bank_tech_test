const History = require("./history");

class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
  }

  deposit(date, funds) {
    this.balance += funds;
    this.history.deposit(date, funds, this.balance);
  }

  withdraw(date, funds) {
    this.balance -= funds;
    this.history.withdraw(date, funds, this.balance);
  }

  returnHistory() {
    return this.history.returnTransactionHistory();
  }
}

module.exports = Bank;
