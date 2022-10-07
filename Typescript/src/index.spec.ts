import { deliveryDate } from ".";

test("A small cake, ordered on Monday, is delivered on Wednesday", () => {
  const Monday = "2022-10-10";
  const Wednesday = "2022-10-12";
  const result = deliveryDate("small", Monday);
  expect(result).toBe(Wednesday);
});
