import { TimeT } from "@src/types/Time";
import Time from "./Time";

export default class TimeList {
  times: TimeT[] = [];

  constructor({ times = [] }: { times?: TimeT[] | undefined }) {
    this.times = times;
  }

  addTime({ ts, title, contents }: Omit<TimeT, 'id'>) {
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
