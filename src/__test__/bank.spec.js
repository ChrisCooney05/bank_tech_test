import Bank from "../bank";

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test("bank can be constructed with a 0 balance", () => {
    expect(bank.balance).toBe(0);
  });

  test("user can deposit money into the account", () => {
    bank.deposit(1000);
    expect(bank.balance).toBe(1000);
  });
});
