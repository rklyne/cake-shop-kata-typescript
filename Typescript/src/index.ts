type Size = "small" | "big";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const day = 60 * 60 * 24 * 1000;

  return new Date(date.getTime() + days * day);
}

export function deliveryDate(size: Size, date: string) {
  const bakingDays = {
    small: 2,
    big: 3,
  }[size];
  const MarcoWorkDays = [1, 2, 3, 4, 5];

  let bakedDate = addDays(new Date(date), bakingDays);
  if (!MarcoWorkDays.includes(bakedDate.getDay())) {
    bakedDate = addDays(bakedDate, bakingDays);
  }

  return formatDate(bakedDate);
}
