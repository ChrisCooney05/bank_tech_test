export default class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds, balance) {
    let fundsFloat = funds.toFixed(2);
    let balanceFloat = balance.toFixed(2);
    this.transactions.push([date, fundsFloat, "", balanceFloat]);
  }

  withdraw(date, funds, balance) {
    let fundsFloat = funds.toFixed(2);
    let balanceFloat = balance.toFixed(2);
    this.transactions.push([date, "", fundsFloat, balanceFloat]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }
}
