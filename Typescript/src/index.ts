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
  nuts?: boolean;
};

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const day = 60 * 60 * 24 * 1000;

  return new Date(date.getTime() + days * day);
}

export function orderDue(order: Order): DateString {
  const work = new BakingProgress(new Date(order.placed), order);

  const delivery = work.doWork();

  return formatDate(delivery);
}

class BakingProgress {
  private decoratingDays = 0;
  private bakingDays = 0;
  private boxingDays = 0;
  private nutsDays = 0;

  constructor(private today: Date, order: Order) {
    this.bakingDays += {
      small: 2,
      big: 3,
    }[order.size];
    if (order.morning) {
      this.bakingDays -= 1;
    }
    if (order.giftWrap) {
      this.boxingDays = 3;
    }
    if (order.frosting) {
      this.decoratingDays += 2;
    }
    if (order.nuts) {
      this.nutsDays = 1;
    }
  }

  subtractOneDayWork() {
    const MarcoWorkDays = [1, 2, 3, 4, 5];
    const SandroWorkDays = [2, 3, 4, 5, 6];

    this.today = addDays(this.today, 1);
    const marcoIsWorking = MarcoWorkDays.includes(this.today.getDay());
    const sandroIsWorking = SandroWorkDays.includes(this.today.getDay());
    if (this.bakingDays) {
      if (marcoIsWorking) {
        this.bakingDays -= 1;
      }
    } else if (this.decoratingDays) {
      if (sandroIsWorking) {
        this.decoratingDays -= 1;
      }
    } else if (this.nutsDays) {
      if (marcoIsWorking) {
        this.nutsDays -= 1;
      }
    }

    if (this.boxingDays) {
      this.boxingDays -= 1;
    }
  }

  workIsDone() {
    return !(
      this.bakingDays ||
      this.boxingDays ||
      this.decoratingDays ||
      this.nutsDays
    );
  }

  doWork() {
    while (!this.workIsDone()) {
      this.subtractOneDayWork();
    }

    return this.today;
  }
}
