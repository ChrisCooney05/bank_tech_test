import Bank from "../bank";

describe("Bank", () => {
  test("bank can be constructed with a 0 balance", () => {
    const bank = new Bank();
    expect(bank.balance).toBe(0);
  });
});
