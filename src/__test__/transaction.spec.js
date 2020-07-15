const Transaction = require("../transaction");

describe("Transaction", () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction("date", "credit", "debit", "balance");
  });

  test("takes 4 arguments on construction and stores them in variables", () => {
    expect(transaction.date).toEqual("date");
    expect(transaction.credit).toEqual("credit");
    expect(transaction.debit).toEqual("debit");
    expect(transaction.balance).toEqual("balance");
  });

  test("Has a method to return the date", () => {
    expect(transaction._returnDate()).toEqual("date");
  });

  test("Has a method to return the credit", () => {
    expect(transaction._returnCredit()).toEqual("credit");
  });

  test("Has a method to return the debit", () => {
    expect(transaction._returnDebit()).toEqual("debit");
  });

  test("Has a method to return the balance", () => {
    expect(transaction._returnBalance()).toEqual("balance");
  });

  test("Returns a formatted string when called", () => {
    expect(transaction.returnSingleTransaction()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
