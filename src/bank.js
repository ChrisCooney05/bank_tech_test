import History from "./history";

export default class Bank {
  constructor(history = new History()) {
    this.balance = 0;
    console.log(history);
    this.history = history;
  }

  deposit(funds) {
    this.balance += funds;
  }

  withdraw(funds) {
    this.balance -= funds;
  }
}
