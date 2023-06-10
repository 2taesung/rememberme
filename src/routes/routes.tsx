import App from '../App';
import Layout from './Layout';
import PositionPage from '../components/PositionPage';
import TimePage from '../components/TimePage';
import TreePage from '../components/TreePage';

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
    path: '/position',
    element: <PositionPage />,
  },
  {
    path: '/time',
    element: <TimePage />,
  },
  {
    path: '/tree',
    element: <TreePage />,
  },
];

export const routes = [
  {
    element: <Layout />,
    children: RouterInfo,
  },
];
