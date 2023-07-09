import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import defaultTheme from './styles/defaultTheme';

const context = describe;

describe('App', () => {
  context('when the current path is "/"', () => {
    it('renders the / page', () => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </ThemeProvider>,
      );

      screen.getByText(/Remember Me!/);
    });
  });
});
