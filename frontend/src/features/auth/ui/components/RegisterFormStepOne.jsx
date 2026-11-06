import { useContext, useState } from 'react'
import authContext from '../../../../context/AuthContext';

export const RegisterFormStepOne = () => {

  const [otpSent, setOtpSent] = useState(true);
  const {currentStep} = useContext(authContext)

  return currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-600" /> Account Verification
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Enter your professional email address to receive your 6-digit verification code.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-700">Work Email Address</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        defaultValue="alex.morgan@teamsync.io"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                        placeholder="name@company.com"
                      />
                    </div>
                    <button
                      onClick={() => setOtpSent(!otpSent)}
                      type="button"
                      className="px-5 py-3 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white font-medium text-sm rounded-xl shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 shrink-0"
                    >
                      {otpSent ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {otpSent ? 'Resend OTP' : 'Send OTP'}
                    </button>
                  </div>
                </div>

                {/* OTP Section (Visible when otpSent is true) */}
                {otpSent && (
                  <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-5 sm:p-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-800">Enter Verification Code</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500">
                      We sent a 4-digit confirmation code to <span className="font-semibold text-slate-700">alex.morgan@teamsync.io</span>
                    </p>

                    {/* 6 Digit Input Grid */}
                    <div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-sm pt-2">
                      {['5', '9', '2', '8'].map((digit, idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          defaultValue={digit}
                          className="w-full h-12 text-center text-lg font-bold bg-white border border-purple-200 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-500/15 outline-none transition-all text-purple-950 shadow-sm"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-purple-100/80">
                      <span>Didn't receive the code?</span>
                      <button type="button" className="font-semibold text-purple-700 hover:text-purple-800 hover:underline">
                        Resend Code
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

