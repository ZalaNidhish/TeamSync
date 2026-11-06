import { Outlet } from 'react-router'
import { AuthProvider } from '../context/AuthContext'

const AuthLayout = () => {
  return <AuthProvider>
      <Outlet />
  </AuthProvider>
}

export default AuthLayout