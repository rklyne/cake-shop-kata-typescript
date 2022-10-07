type Size = "small" | "big";

function formatDate(date:Date) {
  return date.toISOString().slice(0, 10);
}


export function deliveryDate(size: Size, date: string) {
  size;
  const day = 60 * 60 * 24 * 1000;
  const delivery = new Date(date);

  return formatDate(new Date(delivery.getTime() + 2 * day))
}
