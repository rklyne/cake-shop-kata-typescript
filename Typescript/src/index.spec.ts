import { deliveryDate } from ".";

describe("one small cake", () => {
  const order = "small";

  test("ordered on Monday, is delivered on Wednesday", () => {
    const Monday = "2022-10-10";
    const Wednesday = "2022-10-12";
    const result = deliveryDate(order, Monday);
    expect(result).toBe(Wednesday);
  });

  test("ordered on Tuesday, is delivered on Thursday", () => {
    const Tuesday = "2022-10-11";
    const Thursday = "2022-10-13";
    const result = deliveryDate(order, Tuesday);
    expect(result).toBe(Thursday);
  });
});

test("marco only bakes Monday - Friday", () => {
  const Thursday = "2022-10-06";
  const Monday = "2022-10-10";

  expect(deliveryDate("small", Thursday)).toBe(Monday);
})
