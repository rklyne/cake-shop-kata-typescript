type Size = "small" | "big";
export const SMALL: Size = "small";
export const BIG: Size = "big";

type DateString = string;
type Order = {
  size: Size;
  placed: DateString;
  morning?: boolean;
  frosting?: boolean;
  giftWrap?: boolean;
};

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const day = 60 * 60 * 24 * 1000;

  return new Date(date.getTime() + days * day);
}

type OrderWork = {
  decoratingDays: number;
  bakingDays: number;
  boxingDays: number;
  today: Date;
};

function newOrder(today: Date): OrderWork {
  return { decoratingDays: 0, bakingDays: 0, today, boxingDays: 0 };
}

export function orderDue(order: Order): DateString {
  const work: OrderWork = newOrder(new Date(order.placed));
  work.bakingDays += {
    small: 2,
    big: 3,
  }[order.size];
  if (order.morning) {
    work.bakingDays -= 1;
  }
  if (order.giftWrap) {
    work.boxingDays = 3;
  }
  if (order.frosting) {
    work.decoratingDays += 2;
  }
  const weekendDays = 2;
  const MarcoWorkDays = [1, 2, 3, 4, 5];
  const SandroWorkDays = [2, 3, 4, 5, 6];

  let bakedDate = addDays(work.today, work.bakingDays);
  if (!MarcoWorkDays.includes(bakedDate.getDay())) {
    bakedDate = addDays(bakedDate, weekendDays);
  }
  if (work.decoratingDays) {
    bakedDate = addDays(bakedDate, work.decoratingDays);
    if (!SandroWorkDays.includes(bakedDate.getDay())) {
      bakedDate = addDays(bakedDate, weekendDays);
    }
  }

  const extraWaitForBox =
    work.boxingDays - (work.bakingDays + work.decoratingDays);
  if (extraWaitForBox > 0) {
    bakedDate = addDays(bakedDate, extraWaitForBox);
  }

  return formatDate(bakedDate);
}
