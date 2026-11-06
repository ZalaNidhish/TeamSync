import {createBrowserRouter, RouterProvider} from 'react-router'
import MainProtected from './MainProtected'
import AuthProtected from './AuthProtected'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import RegisterPage from '../features/auth/ui/RegisterPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainProtected />,
        children: [
            {
                path: '',
                element: <MainLayout />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthProtected />,
        children: [
            {
                path: '',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        element: <RegisterPage />
                    }   
                ]
            }
        ]
    }
])

export const AppRoutes = ()=>{
    return <RouterProvider router={router} />
}