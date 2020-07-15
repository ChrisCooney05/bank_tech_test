const Transaction = require("../transaction");

describe("Transaction", () => {
  let transaction;

  test("takes 4 arguments on construction and stores them in an array", () => {
    transaction = new Transaction("date", "credit", "debit", "balance");
    expect(transaction.singleTransaction.length).toEqual(4);
    expect(transaction.singleTransaction).toEqual(
      expect.arrayContaining(["date", "credit", "debit", "balance"])
    );
  });
});
