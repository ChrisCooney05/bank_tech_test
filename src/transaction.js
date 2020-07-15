class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  _returnDate() {
    return this.date;
  }

  _returnCredit() {
    return this.credit;
  }

  _returnDebit() {
    return this.debit;
  }

  _returnBalance() {
    return this.balance;
  }

  returnSingleTransaction() {
    return this.singleTransaction;
  }
}

// eslint-disable-next-line no-undef
module.exports = Transaction;
