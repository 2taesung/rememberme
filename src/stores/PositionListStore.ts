import Position from '@src/models/Position';
import Store from './Store';
import PositionList from '@src/models/PositionList';
import { positions } from '@/fixtures';
import { TPosition } from '@src/types';

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
