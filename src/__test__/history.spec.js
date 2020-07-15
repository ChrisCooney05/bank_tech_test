const History = require("../history");
const Transaction = require("../transaction");
jest.mock("../transaction");

describe("History", () => {
  let history;
  let date;

  function getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  beforeEach(() => {
    history = new History();
    date = getDate();
    Transaction.mockClear();
  });

  test("History is constructed with an empty array", () => {
    expect(history.transactions).toEqual([]);
  });

  test("adds transaction to history when a deposit is made", () => {
    history.deposit(date, 1000, 1000);
    expect(history.transactions[0]).toBeInstanceOf(Transaction);
    expect(Transaction).toHaveBeenCalledTimes(1);
  });

  test("Adds transaction to history when a withdrawal is made", () => {
    history.withdraw(date, 500, 500);
    expect(history.transactions[0]).toBeInstanceOf(Transaction);
    expect(Transaction).toHaveBeenCalledTimes(1);
  });

  test("Calls function on Transaction class to get back a line of transaction history", () => {
    history.deposit(date, 1000, 1000);
    history.returnStatement();
    let mockTransaction = Transaction.mock.instances[0].returnSingleTransaction;
    expect(mockTransaction).toHaveBeenCalledTimes(1);
  });

  test("Has a method to convert number to string with two decimal places", () => {
    expect(history._formatInteger(1000)).toEqual("1000.00");
  });
});
