import Store from './Store';

import PositionList from '../models/PositionList';
import Position from '../models/Position';
import { TPosition } from '../types/Position';
import { positions } from '../../fixtures';

export type PositionListStoreSnapshot = {
  positions: Position[];
};

export default class PositionListStore extends Store<PositionListStoreSnapshot> {
  PositionList = new PositionList({ positions: positions });

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
