export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds, balance) {
    this.transactions.push([date, funds, balance]);
  }

  withdraw(date, funds, balance) {
    this.transactions.push([date, funds, balance]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }
}
