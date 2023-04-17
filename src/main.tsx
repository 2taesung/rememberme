import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ReactRouterObj } from './routes/routes';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/setup');
  worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={ReactRouterObj} />
  </React.StrictMode>,
);
