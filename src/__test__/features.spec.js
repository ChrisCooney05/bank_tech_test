const Bank = require("../bank");

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  test("User can depost money in the bank", () => {
    bank.deposit(1000);
    expect(bank.currentBalance()).toEqual(1000);
  });
});
