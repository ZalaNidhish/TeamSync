import {Lock, Eye, EyeOff, ArrowLeft, ArrowRight} from 'lucide-react';
import {useState} from 'react';
import Input from '../../../../shared/ui/components/Input';
import Button from '../../../../shared/ui/components/Button';

const SecurityDetails = ({onBack, onNext, registerMethod}) => {
  const [showPassword, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const {register, handleSubmit, errors, watch, handleSecurityDetails, registerData,} = registerMethod
  return (
    <form onSubmit={handleSubmit(handleSecurityDetails)} className="space-y-6 text-left">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
          Secure your account
        </h2>
        <p className="text-sm text-[#71717A]">
          Create a strong password to protect your TeamSync account.
        </p>
      </div>

      <div className="space-y-4">
        {/* Password */}
        <div>
          <Input
            label="Password"
            id="password"
            {...register('password', {
              required: 'Password is required.'
            })}
            name="password"
            defaultValue={registerData.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a strong password"
            icon={Lock}
            required
            autoComplete="new-password"
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
          {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <Input
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            icon={Lock}
            defaultValue={registerData.password}
            required
            {...register('confirmPassword', {
              required: 'Confirm Password is required.',
              validate: value =>
              value === watch('password') || 'Passwords do not match.'
            })}
            autoComplete="new-password"
            rightElement={
              <button
                type="button"
                onClick={() => setShowConfirmPassword (!showConfirmPassword)}
                className="text-[#71717A] hover:text-[#18181B] cursor-pointer focus:outline-none p-1 rounded"
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirm password'
                    : 'Show confirm password'
                }
              >
                {showConfirmPassword
                  ? <EyeOff className="w-4 h-4" />
                  : <Eye className="w-4 h-4" />}
              </button>
            }
          />
          {errors.confirmPassword && <p className='text-red-600 text-sm'>{errors.confirmPassword.message}</p>}
        </div>

      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-[#E4E4E7]">
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={onBack}
          icon={ArrowLeft}
          className="w-full sm:w-auto"
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          className="w-full sm:w-auto px-8"
        >
          Preview My Details
        </Button>
      </div>
    </form>
  );
};

export default SecurityDetails;
