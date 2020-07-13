export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds) {
    this.transactions.push([date, funds]);
  }

  withdraw(funds) {
    this.transactions.push([funds]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }
}
