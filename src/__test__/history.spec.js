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
    history.deposit(1000);
    expect(history.transactions[0]).toEqual([1000]);
  });

  test("Adds transaction to history when a withdrawal is made", () => {
    history.withdraw(500);
    expect(history.transactions[0]).toEqual([500]);
  });
});
