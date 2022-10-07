type Size = "small" | "big";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const day = 60 * 60 * 24 * 1000;

  return new Date(date.getTime() + days * day);
}

export function deliveryDate(size: Size, date: string) {
  size;
  const delivery = new Date(date);

  return formatDate(addDays(delivery, 2))
}
