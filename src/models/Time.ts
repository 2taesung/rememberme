import { TimeT } from "@src/types/Time";

export default class Time {
  readonly id;

  ts;

  title;

  contents;

  constructor({ id, ts, title, contents }: TimeT) {
    this.id = id;
    this.ts = ts;
    this.title = title;
    this.contents = contents;
  }
}
