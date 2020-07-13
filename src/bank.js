import History from "./history";

export default class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
  }

  deposit(date, funds) {
    this.balance += funds;
    this.history.deposit(date, funds);
  }

  withdraw(date, funds) {
    this.balance -= funds;
    this.history.withdraw(date, funds);
  }
}
