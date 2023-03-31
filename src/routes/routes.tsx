import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MapSection from '../components/MapSection';
import Layout from './Layout';

type RouterItem = {
  path: string;
  element: JSX.Element;
};

export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/map',
    element: <MapSection />,
  },
];

export const ReactRouterObj = createBrowserRouter([
  {
    element: <Layout />,
    children: RouterInfo,
  },
]);
