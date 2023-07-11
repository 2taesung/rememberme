import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes/routes';
import defaultTheme from './styles/defaultTheme';
import { worker } from './mocks/browser';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
