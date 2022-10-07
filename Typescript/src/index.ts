type Size = "small" | "big";

export function deliveryDate(size: Size, date: string) {
  size;
  const day = 60 * 60 * 24 * 1000;
  const delivery = new Date(date);

  return new Date(delivery.getTime() + 2 * day).toISOString().slice(0, 10);
}
