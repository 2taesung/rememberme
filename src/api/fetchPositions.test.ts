import { fetchPositions } from './fetchPositions';
import { positions } from '../../fixtures';

describe('fetchPositions', () => {
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    global.fetch = jest.fn();
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 1,
          lat: 33.55635,
          lng: 126.795841,
          title: '1번 타이틀',
          contents: 'contents',
        },
        {
          id: 2,
          lat: 33.55635,
          lng: 126.795841,
          title: '2번 타이틀',
          contents: 'contents',
        },
      ]),
    });
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it('returns positions when fetch is successful', async () => {
    const positions = await fetchPositions();
    expect(positions).toEqual(positions);
  });

  it('returns an empty array when fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const positions = await fetchPositions();
    expect(positions).toEqual([]);
  });
});
