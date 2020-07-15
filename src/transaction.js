class Transaction {
  constructor(date, credit, debit, balance) {
    this.singleTransaction = [date, credit, debit, balance];
  }

  returnSingleTransaction() {
    return this.singleTransaction;
  }
}

module.exports = Transaction;
