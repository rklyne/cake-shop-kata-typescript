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
  const weekends = [6, 0];

  let bakedDate = addDays(new Date(date), 2);
  if (weekends.includes(bakedDate.getDay())) {
    bakedDate = addDays(bakedDate, 2);
  }

  return formatDate(bakedDate);
}
