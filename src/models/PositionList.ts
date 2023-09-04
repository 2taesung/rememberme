
import { TPosition } from '@src/types';
import Position from './Position';

export default class PositionList {
  positions: TPosition[] = [];

  constructor({ positions = [] }: { positions?: TPosition[] | undefined }) {
    this.positions = positions;
  }

  addPosition({ lat, lng, title, contents }: Omit<TPosition, 'id'>) {
    const id = Math.max(0, ...this.positions.map(position => position.id)) + 1;
    const position = new Position({
      id,
      lat,
      lng,
      title,
      contents,
    });

    return new PositionList({ positions: [...this.positions, position] });
  }
}
