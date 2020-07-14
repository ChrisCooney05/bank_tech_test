class History {
  constructor() {
    this.transactions = [];
  }

  deposit(date, funds, balance) {
    let fundsFloat = this.formatInteger(funds);
    let balanceFloat = this.formatInteger(balance);
    this.transactions.push([date, fundsFloat, "", balanceFloat]);
  }

  withdraw(date, funds, balance) {
    let fundsFloat = this.formatInteger(funds);
    let balanceFloat = this.formatInteger(balance);
    this.transactions.push([date, "", fundsFloat, balanceFloat]);
  }

  returnTransactionHistory() {
    return this.transactions;
  }

  formatInteger(integer) {
    return integer.toFixed(2);
  }
}

export default History;
