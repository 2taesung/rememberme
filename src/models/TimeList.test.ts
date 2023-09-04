import { times } from '@/fixtures';
import TimeList from './TimeList';

describe('TimeList', () => {
  let timeList: TimeList;

  beforeEach(() => {
    timeList = new TimeList({});
  });

  it('adds an Time', () => {
    timeList = timeList.addTime(times[0]);

    expect(timeList.times).toHaveLength(1);

    timeList = timeList.addTime(times[1]);

    expect(timeList.times).toHaveLength(2);
  });
});
