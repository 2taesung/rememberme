import { fetchPositions } from './fetchPositions';
import { positions } from '../../fixtures';

describe('fetchPositions', () => {
  let consoleErrorMock: jest.SpyInstance;

  beforeEach(() => {
    global.fetch = jest.fn();
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(positions),
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
