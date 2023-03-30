// import { render } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const context = describe;

describe('App', () => {
  context('when the current path is "/"', () => {
    it('renders the / page', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      screen.getByText(/Hello/);
    });
  });
});
