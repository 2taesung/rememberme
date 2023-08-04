import { TTime } from "../types";


export default class Time {
  readonly id;

  ts;

  title;

  contents;

  constructor({ id, ts, title, contents }: TTime) {
    this.id = id;
    this.ts = ts;
    this.title = title;
    this.contents = contents;
  }
}
