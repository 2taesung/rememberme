import Store from './Store';

import PositionList from '../models/PositionList';
import Position from '../models/Position';
import { TPosition } from '../types/Position';

export type PositionListStoreSnapshot = {
  positions: Position[];
};

export default class PosiitionListStore extends Store<PositionListStoreSnapshot> {
  PositionList = new PositionList({});

  constructor() {
    super();
    this.takeSnapshot();
  }

  addItem({ lat, lng, title, contents }: Omit<TPosition, 'id'>) {
    this.PositionList = this.PositionList.addPosition({
      lat,
      lng,
      title,
      contents,
    });

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      positions: this.PositionList.positions,
    };
  }
}
