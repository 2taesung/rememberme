import { positions } from '@/fixtures';
import PositionList from './PositionList';

describe('PositionList', () => {
  let positionList: PositionList;

  beforeEach(() => {
    positionList = new PositionList({});
  });

  it('adds an Position', () => {
    positionList = positionList.addPosition(positions[0]);

    expect(positionList.positions).toHaveLength(1);

    positionList = positionList.addPosition(positions[1]);

    expect(positionList.positions).toHaveLength(2);
  });
});
