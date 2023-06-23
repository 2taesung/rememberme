import PositionListStore from './PositionListStore';

import Position from '../models/Position';

test('PositionListStore', () => {
  const positionListStore = new PositionListStore();

  const handleChange = jest.fn();

  positionListStore.addListener(handleChange);

  positionListStore.addItem({
    lat: 33.55635,
    lng: 126.795841,
    title: '1',
    contents: 'contents',
  });

  expect(handleChange).toBeCalled();

  expect(positionListStore.getSnapshot()).toEqual({
    positions: [
      new Position({
        id: 1,
        lat: 33.55635,
        lng: 126.795841,
        title: '1',
        contents: 'contents',
      }),
    ],
  });
});
