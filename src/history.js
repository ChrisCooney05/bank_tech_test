export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(funds) {
    this.transactions.push([funds]);
  }

  withdraw(funds) {
    this.transactions.push([funds]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }
}
