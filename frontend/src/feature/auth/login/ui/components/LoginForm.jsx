import {useState} from 'react';
import {Mail, Lock, Eye, EyeOff, LogIn} from 'lucide-react';
import Input from '../../../../shared/ui/components/Input';
import Button from '../../../../shared/ui/components/Button';
import GoogleIcon from '../../../../shared/ui/components/GoogleIcon';

const LoginForm = ({
  onLogin,
  onGoogleLogin,
}) => {
  const [showPassword, setShowPassword] = useState (false);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [rememberMe, setRememberMe] = useState (false);

  const handleSubmit = e => {
    e.preventDefault ();
    if (onLogin) {
      onLogin ({email, password, rememberMe});
    }
  };

  return (
    <div className="w-full space-y-2">
      {/* Form Header */}
      <div className="text-left">
        <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
          Welcome back
        </h2>
        <p className="text-sm text-[#71717A]">
          Enter your work email and password to access your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Email Input Field */}
        <Input
          label="Work Email Address"
          id="login-email"
          name="email"
          type="email"
          placeholder="Enter your work email"
          icon={Mail}
          value={email}
          onChange={e => setEmail (e.target.value)}
          required
          autoComplete="email"
        />

        {/* Password Input Field */}
        <Input
          label="Password"
          id="login-password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          icon={Lock}
          value={password}
          onChange={e => setPassword (e.target.value)}
          required
          autoComplete="current-password"
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword (!showPassword)}
              className="text-[#71717A] hover:text-[#18181B] cursor-pointer focus:outline-none p-1 rounded"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword
                ? <EyeOff className="w-4 h-4" />
                : <Eye className="w-4 h-4" />}
            </button>
          }
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe (e.target.checked)}
              className="w-4 h-4 rounded border-[#E4E4E7] text-[#6D28D9] focus:ring-[#6D28D9] cursor-pointer accent-[#6D28D9]"
            />
            <span className="text-sm text-[#71717A] hover:text-[#18181B]">
              Remember me
            </span>
          </label>
        </div>

        {/* Primary Sign In Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            icon={LogIn}
            iconPosition="right"
          >
            Sign in
          </Button>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E4E4E7]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-[#71717A] font-medium tracking-wide">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          icon={GoogleIcon}
          iconPosition="right"
          onClick={onGoogleLogin}
        >
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
