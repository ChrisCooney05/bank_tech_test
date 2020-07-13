export default class Bank {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(num) {
    this.balance += num;
  }

  withdraw(num) {
    this.balance -= num;
  }
}
