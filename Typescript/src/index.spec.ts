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

  const Friday = "2022-10-07";
  const Tuesday = "2022-10-11";
  expect(deliveryDate("small", Friday)).toBe(Tuesday);
});

test("big cakes take 3 days", () => {
  const order = "big";

  const Monday = "2022-10-10";
  const Thursday = "2022-10-13";
  expect(deliveryDate(order, Monday)).toBe(Thursday);
});

test("orders in the morning start same day", () => {
  const Monday = "2022-10-10";
  const Tuesday = "2022-10-11";
  const order = {
    size: "small",
    placed: Monday,
    morning: true,
  };
  expect(orderDue(order)).toBe(Tuesday);
