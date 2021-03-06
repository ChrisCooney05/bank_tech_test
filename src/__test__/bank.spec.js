const Bank = require("../bank");
const History = require("../history");
jest.mock("../history");

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
    History.mockClear();
    date = getDate();
  });

  test("Bank is constructed with a 0 balance", () => {
    bank = new Bank();
    expect(bank.balance).toEqual(0);
  });

  test("Has a function to return the current balance", () => {
    bank = new Bank();
    expect(bank.currentBalance()).toEqual(0);
  });

  test("Bank is constructed with an instance of History", () => {
    bank = new Bank();
    expect(bank.history).toBeInstanceOf(History);
    expect(History).toHaveBeenCalledTimes(1);
  });

  test("user can deposit money into the account", () => {
    bank = new Bank();
    bank.deposit(1000);
    const depositMock = History.mock.instances[0].deposit;
    const balance = bank.balance;
    expect(balance).toBe(1000);
    expect(depositMock).toHaveBeenCalledTimes(1);
    expect(depositMock).toHaveBeenCalledWith(date, 1000, balance);
  });

  test("User can make a withdrawal from the bank", () => {
    bank = new Bank();
    bank.deposit(1000);
    bank.withdraw(250);
    const withdrawMock = History.mock.instances[0].withdraw;
    const balance = bank.balance;
    expect(balance).toEqual(750);
    expect(withdrawMock).toHaveBeenCalledTimes(1);
    expect(withdrawMock).toHaveBeenCalledWith(date, 250, balance);
  });

  test("Should call method from History class when requesting full history", () => {
    bank = new Bank();
    bank.statement();
    const historyMock = History.mock.instances[0].logStatement;
    expect(historyMock).toHaveBeenCalledTimes(1);
  });
});
