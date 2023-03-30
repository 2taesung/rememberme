import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ReactRouterObj } from './routes/routes';

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={ReactRouterObj} />
  </React.StrictMode>,
);
