import {createBrowserRouter, RouterProvider} from 'react-router';
import AuthProtected from './Protected/AuthProtected';
import AuthLayout from '../layout/AuthLayout';
import Register from '../../feature/auth/register/ui/pages/Register';
import Login from '../../feature/auth/login/ui/pages/Login';
import MainLayout from '../layout/MainLayout';

const AppRoutes = () => {
  const router = createBrowserRouter ([
    {
      path: '/auth',
      element: <AuthProtected />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            {
              path: 'register',
              element: <Register />,
            },
            {
              path: 'login',
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: '',
      element: <MainLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;