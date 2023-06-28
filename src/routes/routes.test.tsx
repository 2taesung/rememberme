import { render, screen, waitFor } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, {
      initialEntries: [path],
    });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter('/');

      await waitFor(() => {
        screen.getByText(/Main/);
      });
    });
  });

  // context('when the current path is “/position"', () => {
  //   context('without category ID', () => {
  //     it('renders the product list page', async () => {
  //       renderRouter('/position');

  //       await waitFor(() => {
  //         screen.getByText(/Position/);
  //       });
  //     });
  //   });
  // });
});
