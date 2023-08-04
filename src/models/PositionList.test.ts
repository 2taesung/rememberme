import PositionList from './PositionList';
import { positions } from '../../fixtures';

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
