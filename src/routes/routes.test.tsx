import { render, screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes';
import defaultTheme from '../styles/defaultTheme';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, {
      initialEntries: [path],
    });
    render(
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>,
    );
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter('/');

      await waitFor(() => {
        screen.getByText(/Remember Me!/);
      });
    });
  });

  context('when the current path is “/position"', () => {
    context('without position ID', () => {
      it('renders the position list page', async () => {
        renderRouter('/position');

        await waitFor(() => {
          screen.getByText(/Position/);
        });
      });
    });
  });
});
