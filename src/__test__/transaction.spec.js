const Transaction = require("../transaction");

describe("Transaction", () => {
  let transaction;

  test("takes 4 arguments on construction and interpolates them into a string", () => {
    transaction = new Transaction("date", "credit", "debit", "balance");
    expect(transaction.singleTransaction).toEqual(
      "date || credit || debit || balance"
    );
  });

  test("Returns a formatted string when called", () => {
    transaction = new Transaction("date", "credit", "debit", "balance");
    expect(transaction.returnSingleTransaction()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
