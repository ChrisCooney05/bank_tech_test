export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds) {
    this.transactions.push([date, funds]);
  }

  withdraw(date, funds) {
    this.transactions.push([date, funds]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }
}
