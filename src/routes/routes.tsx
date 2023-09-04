import React, { Suspense } from 'react';
import Layout from './Layout';
import LoadingAnimation from '@src/components/LoadingAnimation';

const PositionPage = React.lazy(() => import('../pages/PositionPage'));
const TimePage = React.lazy(() => import('../pages/TimePage'));
const TreePage = React.lazy(() => import('../pages/TreePage'));
const MainPage = React.lazy(() => import('../pages/MainPage'));

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
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Layout />
      </Suspense>
    ),
    children: RouterInfo,
  },
];
