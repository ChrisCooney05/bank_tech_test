import Bank from "../bank";

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test("Bank is constructed with a 0 balance", () => {
    expect(bank.balance).toBe(0);
  });

  test("Bank is constructed with an empty array to store history", () => {
    expect(bank.history).toEqual([]);
  });

  test("user can deposit money into the account", () => {
    bank.deposit(1000);
    expect(bank.balance).toBe(1000);
  });

  test("User can make a withdrawal from the bank", () => {
    bank.deposit(1000);
    bank.withdraw(500);
    expect(bank.balance).toEqual(500);
  });
});
