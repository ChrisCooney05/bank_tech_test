class Transaction {
  constructor(date, credit, debit, balance) {
    this.singleTransaction = [date, credit, debit, balance];
  }
}

module.exports = Transaction;
