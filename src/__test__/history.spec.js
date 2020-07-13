import History from "../history";

describe("History", () => {
  let history;

  beforeEach(() => {
    history = new History();
  });

  test("History is constructed with an empty array", () => {
    expect(history.transactions).toEqual([]);
  });
});
