export default class Bank {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(funds) {
    this.balance += funds;
  }

  withdraw(funds) {
    this.balance -= funds;
  }
}
