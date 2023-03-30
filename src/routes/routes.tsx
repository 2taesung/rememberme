import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "./Layout";

type RouterItem = {
  path: string;
  element: JSX.Element;
};

export const RouterInfo: RouterItem[] = [
  {
    path: "/",
    element: <App />,
  },
];

export const ReactRouterObj = createBrowserRouter([
  {
    element: <Layout />,
    children: RouterInfo,
  },
]);
