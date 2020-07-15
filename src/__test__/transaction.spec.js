const Transaction = require("../transaction");

describe("Transaction", () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction();
  });

  test("The transaction class constructs with a an empty array", () => {
    expect(transaction.singleTransaction).toEqual([]);
  });
});
