class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  toString() {
    let date = this._returnDate();
    let credit = this._returnCredit();
    let debit = this._returnDebit();
    let balance = this._returnBalance();
    return `${date} || ${credit} || ${debit} || ${balance}`;
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
}

// eslint-disable-next-line no-undef
module.exports = Transaction;
