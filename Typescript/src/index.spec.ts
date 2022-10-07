import { BIG, SMALL, orderDue } from ".";

describe("one small cake", () => {
  const order = SMALL;

  test("ordered on Monday, is delivered on Wednesday", () => {
    const Monday = "2022-10-10";
    const Wednesday = "2022-10-12";
    const result = orderDue({ size: order, placed: Monday, morning: false });
    expect(result).toBe(Wednesday);
  });

  test("ordered on Tuesday, is delivered on Thursday", () => {
    const Tuesday = "2022-10-11";
    const Thursday = "2022-10-13";
    const result = orderDue({ size: order, placed: Tuesday, morning: false });
    expect(result).toBe(Thursday);
  });
});

test("marco only bakes Monday - Friday", () => {
  const Thursday = "2022-10-06";
  const Monday = "2022-10-10";
  expect(orderDue({ size: SMALL, placed: Thursday, morning: false })).toBe(
    Monday
  );

  const Friday = "2022-10-07";
  const Tuesday = "2022-10-11";
  expect(orderDue({ size: SMALL, placed: Friday, morning: false })).toBe(
    Tuesday
  );
});

test("big cakes take 3 days", () => {
  const order = BIG;

  const Monday = "2022-10-10";
  const Thursday = "2022-10-13";
  expect(orderDue({ size: order, placed: Monday, morning: false })).toBe(
    Thursday
  );
});

describe("orders in the morning start same day", () => {
  test("small cakes ready tomorrow", () => {
    const Monday = "2022-10-10";
    const Tuesday = "2022-10-11";
    const order = {
      size: SMALL,
      placed: Monday,
      morning: true,
    };
    expect(orderDue(order)).toBe(Tuesday);
  });

  test("big cakes ready in 2 days", () => {
    const Monday = "2022-10-10";
    const Wednesday = "2022-10-12";
    const order = {
      size: BIG,
      placed: Monday,
      morning: true,
    };
    expect(orderDue(order)).toBe(Wednesday);
  });
});

describe("custom frosting takes 2 days", () => {
  test("a small cake with frosting ordered on Monday morning is ready on Thursday", () => {
    const Monday = "2022-10-10";
    const Thursday = "2022-10-13";
    expect(
      orderDue({
        placed: Monday,
        size: SMALL,
        morning: true,
        frosting: true,
      })
    ).toBe(Thursday);
  });
});
