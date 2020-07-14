import History from "../history";

describe("History", () => {
  let history;
  let date;

  function getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth();
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  beforeEach(() => {
    history = new History();
    date = getDate();
  });

  test("History is constructed with an empty array", () => {
    expect(history.transactions).toEqual([]);
  });

  test("adds transaction to history when a deposit is made", () => {
    history.deposit(date, 1000, 1000);
    expect(history.transactions[0]).toEqual([date, "1000.00", "", "1000.00"]);
  });

  test("Adds transaction to history when a withdrawal is made", () => {
    history.withdraw(date, 500, 500);
    expect(history.transactions[0]).toEqual([date, "", "500.00", "500.00"]);
  });

  test("Returns full transaction history as an array of arrays", () => {
    history.deposit(date, 1000, 1000);
    history.withdraw(date, 250, 750);
    expect(history.returnTransactionHistory()).toEqual([
      [date, "1000.00", "", "1000.00"],
      [date, "", "250.00", "750.00"],
    ]);
  });

  test("Has a method to convert number to string with two decimal places", () => {
    expect(history.formatInteger(1000)).toEqual("1000.00");
  });
});
