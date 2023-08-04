import { TTime } from "../types";
import Time from "./Time";

export default class TimeList {
  times: TTime[] = [];

  constructor({ times = [] }: { times?: TTime[] | undefined }) {
    this.times = times;
  }

  addTime({ ts, title, contents }: Omit<TTime, 'id'>) {
    const id = Math.max(0, ...this.times.map(time => time.id)) + 1;
    const time = new Time({
      id,
      ts,
      title,
      contents,
    });

    return new TimeList({ times: [...this.times, time] });
  }
}
