const Bank = require("../bank");

describe("Bank", () => {
  let bank;
  let date;

  function getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yy = t.getFullYear();
    return `${dd}/${mm}/${yy}`;
  }

  beforeEach(() => {
    bank = new Bank();
    date = getDate();
  });

  test("User can depost money in the bank", () => {
    bank.deposit(1000);
    expect(bank.currentBalance()).toEqual(1000);
  });

  test("user can withdraw money from the bank and balance is tracked correctly", () => {
    bank.deposit(1000);
    bank.withdraw(500);
    expect(bank.currentBalance()).toEqual(500);
  });

  test("User can request a statement and everything is logged correctly formatted and in rev chronological order", () => {
    console.log = jest.fn();
    bank.deposit(1000);
    bank.withdraw(250);
    bank.statement();
    expect(console.log).toHaveBeenCalledWith(
      `date || credit || debit || balance\n${date} ||  || 250.00 || 750.00\n${date} || 1000.00 ||  || 1000.00`
    );
  });
});
