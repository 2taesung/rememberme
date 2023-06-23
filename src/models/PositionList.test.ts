import PositionList from './PositionList';

describe('PositionList', () => {
  let positionList: PositionList;

  beforeEach(() => {
    positionList = new PositionList({});
  });

  it('adds an Position', () => {
    positionList = positionList.addPosition({
      lat: 33.55635,
      lng: 126.795841,
      title: '1',
      contents: 'contents',
    });

    expect(positionList.positions).toHaveLength(1);

    positionList = positionList.addPosition({
      lat: 33.55635,
      lng: 126.795841,
      title: '2',
      contents: 'contents',
    });

    expect(positionList.positions).toHaveLength(2);
  });
});
