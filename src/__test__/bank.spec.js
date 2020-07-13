import Bank from "../bank";
import History from "../history";
jest.mock("../history");

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    History.mockClear();
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
    expect(bank.balance).toBe(1000);
    expect(depositMock).toHaveBeenCalledTimes(1);
  });

  test("User can make a withdrawal from the bank", () => {
    bank = new Bank();
    bank.deposit(1000);
    bank.withdraw(500);
    const withdrawMock = History.mock.instances[0].withdraw;
    expect(bank.balance).toEqual(500);
    expect(withdrawMock).toHaveBeenCalledTimes(1);
  });
});
