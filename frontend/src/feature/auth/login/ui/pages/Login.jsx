import Navbar from '../components/Navbar';
import FormCard from '../../../../shared/ui/components/FormCard';
import LoginForm from '../components/LoginForm';

const Login = ({onLogin, onGoogleLogin, onForgotPassword, onRegisterClick}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-[#18181B]">
      {/* Top Navigation */}
      <Navbar onRegisterClick={onRegisterClick} />

      {/* Main Login Area */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto">
          {/* Main Login Card */}
          <FormCard>
            <LoginForm
              onLogin={onLogin}
              onGoogleLogin={onGoogleLogin}
              onForgotPassword={onForgotPassword}
              onRegisterClick={onRegisterClick}
            />
          </FormCard>
        </div>
      </main>
    </div>
  );
};

export default Login;
