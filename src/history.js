export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(funds) {
    this.transactions.push([funds]);
  }
}
