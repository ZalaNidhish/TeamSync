import {Users, ArrowRight} from 'lucide-react';
import {useNavigate} from 'react-router';

const Navbar = ({onRegisterClick}) => {
  const navigate = useNavigate ();
  return (
    <header className="w-full bg-white border-b border-[#E4E4E7] sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo and Name */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#E4E4E7] flex items-center justify-center text-[#6D28D9]">
            <Users className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-[#18181B] tracking-tight">
                TeamSync
              </span>
            </div>
            <p className="text-xs text-[#71717A] hidden sm:block">
              Work better, together.
            </p>
          </div>
        </div>

        {/* Right side: Don't have an account? Sign up */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-sm">
          <span className="text-[#71717A] hidden sm:inline">
            Don't have an account?
          </span>
          <button
            type="button"
            onClick={onRegisterClick}
            className="inline-flex items-center space-x-1 font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-none cursor-pointer focus:outline-none focus:underline"
          >
            <span onClick={() => navigate ('/auth/register')}>Sign up</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
