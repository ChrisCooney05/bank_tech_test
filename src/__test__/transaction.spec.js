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
    expect(transaction.returnDate()).toEqual("date");
  });

  test("Returns a formatted string when called", () => {
    expect(transaction.returnSingleTransaction()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
