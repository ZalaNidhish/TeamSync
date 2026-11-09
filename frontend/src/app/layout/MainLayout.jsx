import {useNavigate} from 'react-router';
import {UserPlus, LogIn, ArrowRight} from 'lucide-react';

const MainLayout = () => {
  const navigate = useNavigate ();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <UserPlus size={28} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Welcome!
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Get started by creating an account or logging in.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <button
            onClick={() => navigate ('/auth/register')}
            className="w-full flex items-center justify-between px-5 py-4 bg-purple-700 text-white rounded-xl hover:bg-purple-800 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <UserPlus size={20} />
              <span className="font-medium">Create an Account</span>
            </div>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => navigate ('/auth/login')}
            className="w-full flex items-center justify-between px-5 py-4 border border-gray-200 text-gray-800 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <LogIn size={20} />
              <span className="font-medium">Login to Account</span>
            </div>
            <ArrowRight size={20} />
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Choose an option to continue
        </p>

      </div>
    </div>
  );
};

export default MainLayout;