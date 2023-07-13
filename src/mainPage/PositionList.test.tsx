import { render, screen } from '@testing-library/react';
import PositionList from './PositionList';
import positions from '../../fixtures/positions';

jest.mock('../hooks/usePositionListStore', () => ({
  __esModule: true,
  default: () => [
    {
      positions: positions,
    },
  ],
}));

describe('PositionList component', () => {
  it('renders a list item for each position', () => {
    render(<PositionList />);

    // Get all ListItemText components and check if there is one with the mocked title
    const listItems = screen.getAllByRole('button');
    expect(listItems).toHaveLength(positions.length);
    expect(screen.getByText(positions[0].title)).toBeInTheDocument();
  });
});
