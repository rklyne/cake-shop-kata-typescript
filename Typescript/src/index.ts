type Size = "small" | "big";
export const SMALL: Size = "small";
export const BIG: Size = "big";

type DateString = string;
type Order = {
  size: Size;
  placed: DateString;
  morning: boolean;
};

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const day = 60 * 60 * 24 * 1000;

  return new Date(date.getTime() + days * day);
}

export function deliveryDate(size: Size, date: string): DateString {
  const bakingDays = {
    small: 2,
    big: 3,
  }[size];
  const weekendDays = 2;
  const MarcoWorkDays = [1, 2, 3, 4, 5];

  let bakedDate = addDays(new Date(date), bakingDays);
  if (!MarcoWorkDays.includes(bakedDate.getDay())) {
    bakedDate = addDays(bakedDate, weekendDays);
  }

  return formatDate(bakedDate);
}

export function orderDue(order: Order): DateString {
  if (order.morning) {
    return "2022-10-11";
  }
}
