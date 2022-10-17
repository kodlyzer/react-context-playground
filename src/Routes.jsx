import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import DefaultSuspenseFallback from './components/DefaultSuspenseFallback';

import App from './pages/App';
import paths from './utils/routes.utils';

const Dashboard = React.lazy(() => import('./utils/dashboard.context'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
        path: paths.dashboard,
        element: <DefaultSuspenseFallback><Dashboard /></DefaultSuspenseFallback>,
        index: true
    }]
  }
]);

const Routes = () => <RouterProvider router={router} />

export default Routes;