class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  returnDate() {
    return this.date;
  }

  returnCredit() {
    return this.credit;
  }

  returnDebit() {
    return this.debit;
  }

  returnSingleTransaction() {
    return this.singleTransaction;
  }
}

// eslint-disable-next-line no-undef
module.exports = Transaction;
