import {Info, Mail, Send, SendIcon} from 'lucide-react';
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
        <div className="space-y-4 flex flex-col">
          
          <label htmlFor="email" className="block text-sm font-medium text-[#18181B] mb-1">Enter Your Email</label>
          <div className='flex gap-2 items-center justify-center'>            
            <input
              {...register('email', {
                required: "Required"
              })}
              type="email"
              defaultValue={registerMethod.registerData?registerMethod.registerData.email:''}
              placeholder="Enter your work email"
              className="w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] p-3 outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400"
              autoComplete="email"
            />

          <button
              className={`flex items-center justify-center gap-2 font-medium rounded-lg transition-none select-none focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#6D28D9] text-white text-nowrap py-3 px-4 text-sm ${otpSending ? 'cursor-not-allowed' : 'cursor-pointer'} hover:scale-95 transition-all`}
              type="submit"
              disabled={!!otpSending}
            >
              {otpSending?'Sending':`${resendOtp?"Resend" : "Send"} Code`} <SendIcon size={16} />
            </button>
          </div>

          {/* Google Sign‑Up UI – matches theme */}
          {!otpSent &&  <button
              className='self-center cursor-pointer hover:scale-95 w-fit border border-neutral-300 p-4 rounded-lg hover:bg-purple-50 transition-all'
              type="button"
              disabled= {otpSending}
              onClick={handleGoogle}
            >
              <GoogleIcon />
            </button>
          }
        </div>
      </form>
      {otpSent && tempOtp && (
        <div className="flex items-center mt-2 justify-between p-3.5 bg-violet-50/70 border border-violet-200/80 rounded-xl text-sm transition-all duration-200">
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
