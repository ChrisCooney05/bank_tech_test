import History from "../history";

describe("History", () => {
  let history;

  beforeEach(() => {
    history = new History();
  });

  test("History is constructed with an empty array", () => {
    expect(history.transactions).toEqual([]);
  });

  test("adds transaction to history when a deposit is made", () => {
    history.deposit("10/01/2020", 1000, 1000);
    expect(history.transactions[0]).toEqual(["10/01/2020", 1000, "", 1000]);
  });

  test("Adds transaction to history when a withdrawal is made", () => {
    history.withdraw("10/02/2020", 500, 500);
    expect(history.transactions[0]).toEqual(["10/02/2020", "", 500, 500]);
  });

  test("Returns full transaction history as an array of arrays", () => {
    history.deposit("10/01/2020", 1000, 1000);
    history.withdraw("10/02/2020", 250, 750);
    expect(history.returnTransactionHistory()).toEqual([
      ["10/01/2020", 1000, "", 1000],
      ["10/02/2020", "", 250, 750],
    ]);
  });
});
