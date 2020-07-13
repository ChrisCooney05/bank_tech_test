export default class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(num) {
    this.balance += num;
  }
}
