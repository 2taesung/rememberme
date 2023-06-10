import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/setup');
//   worker.start();
// }
const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
