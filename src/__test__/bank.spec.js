import Bank from "../bank";
import History from "../history";
jest.mock("../history");
// const mMock = jest.fn();

describe("Bank", () => {
  let bank;
  let date;

  function getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth();
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

  test("There is a way to retrieve a full history through the Bank class", () => {
    bank = new Bank();
    bank.deposit(1000);
    bank.withdraw(250);
    bank.returnHistory();
    const historyMock = History.mock.instances[0].returnTransactionHistory;
    expect(historyMock).toHaveBeenCalledTimes(1);
  });
});

// History.mockImplementation(() => {
//   return {
//     returnTransactionHistory: mMock,
//   };
// });
