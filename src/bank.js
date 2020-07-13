import History from "./history";

export default class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    this.history = history;
  }

  deposit(funds) {
    this.balance += funds;
    this.history.deposit(funds);
  }

  withdraw(funds) {
    this.balance -= funds;
  }
}
