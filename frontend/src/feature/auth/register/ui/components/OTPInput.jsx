import {ArrowRight} from 'lucide-react';
import Button from '../../../../shared/ui/components/Button';
  
const OTPInput = ({registerMethod}) => {

  const {register, handleSubmit, handleVerifyOTP} = registerMethod

  const otpArr = ['', '', '', '']
  return (
    <form onSubmit={handleSubmit(handleVerifyOTP)} className="mt-6 pt-6 border-t border-[#E4E4E7] space-y-5 text-left flex flex-col">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#18181B]">
            Verify your email
          </h3>
        </div>
      </div>

      {/* 4 OTP Input Boxes */}
      <div className="flex items-center justify-between gap-2 sm:gap-3 max-w-sm mx-auto my-4">
        {otpArr.map ((digit, index) => (
          <input
            key={index}
            {...register(`digit_${index + 1}`, {
              required: "Required"
            })}
            type="text"
            autoFocus={index==0}
            onChange={(e)=>{
              const nextInput = e.target.nextElementSibling;
              nextInput?.focus();
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !e.target.value) {
                e.target.previousElementSibling?.focus();
              }
            }}
            maxLength={1}
            className={`w-11 h-12 sm:w-12 sm:h-13 text-center text-lg font-semibold text-[#18181B] bg-white border rounded-lg outline-none transition-none focus:ring-1 focus:ring-[#6D28D9] ${digit ? 'border-[#6D28D9] bg-[#F5F3FF]/40' : 'border-[#E4E4E7]'}`}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>

      {/* Verify OTP Button */}
      <button
        type="submit"
        className='bg-[#6D28D9] px-6 py-2 text-nowrap text-white flex gap-4 rounded self-end cursor-pointer hover:scale-95'
      >
        Verify OTP <ArrowRight />
      </button>
    </form>
  );
};

export default OTPInput;
