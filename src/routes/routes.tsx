import App from '../App';
import Layout from './Layout';
import PositionPage from '../pages/PositionPage';
import TimePage from '../pages/TimePage';
import TreePage from '../pages/TreePage';
import MainPage from '../pages/MainPage';

type RouterItem = {
  path: string;
  element: JSX.Element;
};

export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/home',
    element: <MainPage />,
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
