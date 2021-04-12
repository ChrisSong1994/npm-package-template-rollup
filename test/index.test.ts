import plus from "../src";
describe("test plus", (): void => {
  test("plus", (): void => {
    const resp: number = plus(1, 2);
    expect(resp).toBe(3);
  });
});
