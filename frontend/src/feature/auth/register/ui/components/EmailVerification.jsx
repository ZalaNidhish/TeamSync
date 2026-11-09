import {Info, Mail, Send} from 'lucide-react';
import Input from '../../../../shared/ui/components/Input';
import Button from '../../../../shared/ui/components/Button';
import OTPInput from './OTPInput';
import GoogleIcon from '../../../../shared/ui/components/GoogleIcon';
import { useSearchParams } from 'react-router';

const EmailVerification = ({registerMethod}) => {
  
  let {otpSent, otpSending, handleSubmit, register, errors, handleSendOTP, handleGoogle, tempOtp, resendOtp} = registerMethod

  return (
    <div>
      {/* Form Header */}
      <form onSubmit={handleSubmit(handleSendOTP)} className="space-y-6">
        <div className="text-left space-y-1">
          <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
            Let's get started
          </h2>
          <p className="text-sm text-[#71717A]">
            Enter your work email address to begin your registration.
          </p>
        </div>

        {/* Email Input Field */}
        <div className="space-y-4">
          <Input
            {...register('email', {
              required: "Required"
            })}
            error={errors.email && errors.email.message}
            label="Work Email Address"
            id="work-email"
            name="email"
            type="email"
            defaultValue={registerMethod.registerData?registerMethod.registerData.email:''}
            placeholder="Enter your work email"
            icon={Mail}
            required
            autoComplete="email"
          />

          {!otpSent && <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={otpSending}
              icon={Send}
              iconPosition="right"
            >
              {otpSending?'Sending':`${resendOtp?"Resend" : "Send"} Verification Code`}
            </Button>
          }

          {/* Google Sign‑Up UI – matches theme */}
         {!otpSent &&  <Button
            type="button"
            variant="outline"
            size="lg"
            fullWidth
            disabled= {otpSending}
            icon={GoogleIcon}
            iconPosition="right"
            onClick={handleGoogle}
          >
            Sign up with Google
          </Button>
         }
        </div>
      </form>
      {otpSent && tempOtp && (
        <div className="flex items-center justify-between p-3.5 bg-violet-50/70 border border-violet-200/80 rounded-xl text-sm transition-all duration-200">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded-md bg-violet-100 text-violet-700">
              <Info className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <span className="text-violet-900 font-medium">OTP:</span>
              <span className="font-mono font-bold text-violet-950 tracking-widest text-base bg-white/80 px-2 py-0.5 rounded border border-violet-200">
                {tempOtp}
              </span>
            </div>
          </div>
        </div>
      )}
      {otpSent && <OTPInput registerMethod={registerMethod}/>}
    </div>
  );
};

export default EmailVerification;
