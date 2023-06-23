import { TPosition } from '../types/Position';

export default class Position {
  readonly id;

  lat;

  lng;

  title;

  contents;

  constructor({ id, lat, lng, title, contents }: TPosition) {
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.title = title;
    this.contents = contents;
  }
}
