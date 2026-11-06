import { useState } from 'react';
import { 
  Mail, 
  ShieldCheck, 
  User, 
  Phone, 
  Calendar, 
  Building2, 
  FileText, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Sparkles, 
  Check, 
  RefreshCw,
  Clock,
  Briefcase
} from 'lucide-react';
import { RegisterFormStepOne } from './components/RegisterFormStepOne';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Step definitions
  const steps = [
    { id: 1, title: 'Verification', description: 'Email & OTP' },
    { id: 2, title: 'Personal Details', description: 'Profile info' },
    { id: 3, title: 'Security', description: 'Password setup' },
    { id: 4, title: 'Preview', description: 'Send for approval' },
  ];

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 font-sans flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      {/* Background Decorative Blur Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-fuchsia-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Branding Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-white border border-purple-100 shadow-sm px-4 py-2 rounded-full mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              TeamSync
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Create Your Workspace Account
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete the multi-step verification to submit your profile for admin approval.
          </p>
        </header>

        {/* Stepper Navigation */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left outline-none focus:ring-2 focus:ring-purple-400/50 ${
                    isActive
                      ? 'bg-purple-50/80 border border-purple-200 shadow-sm'
                      : isCompleted
                      ? 'bg-slate-50 border border-slate-200/60 hover:bg-purple-50/40'
                      : 'bg-transparent border border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold transition-all shrink-0 ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25 ring-4 ring-purple-100'
                        : isCompleted
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : step.id}
                  </div>
                  <div className="hidden sm:block min-w-0">
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isActive ? 'text-purple-700' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                      }`}
                    >
                      Step 0{step.id}
                    </p>
                    <p
                      className={`text-sm font-medium truncate ${
                        isActive ? 'text-purple-900 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl shadow-purple-950/[0.03] border border-slate-200/80 p-6 sm:p-10 flex-1 flex flex-col justify-between">
          <div>

            <RegisterFormStepOne />


            {/* STEP 2: PERSONAL DETAILS */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-600" /> Personal Details
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Tell us a bit about yourself so your team members can recognize you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        defaultValue="Alex Morgan"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 019-2834"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Date of Birth</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        defaultValue="1995-08-14"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Department Select */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Department</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <select
                        defaultValue="Engineering"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="Engineering">Engineering & Development</option>
                        <option value="Product">Product Management</option>
                        <option value="Design">UI/UX Design</option>
                        <option value="Marketing">Growth & Marketing</option>
                        <option value="HR">Human Resources</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bio / Short Intro */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Short Bio / Introduction</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={3}
                      defaultValue="Senior Product Designer with 6+ years experience building scalable SaaS products and enterprise design systems."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium resize-none"
                      placeholder="Share a brief overview of your role or background..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: SECURITY SETUP */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-600" /> Security Setup
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Create a strong password to protect your TeamSync workspace credentials.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Password */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        defaultValue="TeamSync#2026Secure"
                        className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">Confirm Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        defaultValue="TeamSync#2026Secure"
                        className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-600">Password Strength:</span>
                    <span className="font-bold text-emerald-600">Strong</span>
                  </div>
                  {/* Strength Bar */}
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="h-1.5 rounded-full bg-emerald-500"></div>
                    <div className="h-1.5 rounded-full bg-emerald-500"></div>
                    <div className="h-1.5 rounded-full bg-emerald-500"></div>
                    <div className="h-1.5 rounded-full bg-emerald-500"></div>
                  </div>

                  {/* Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> At least 8 characters
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Includes uppercase letter
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Includes a number (0-9)
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Includes special character (#@!)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: PREVIEW & SUBMISSION */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" /> Final Review
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Review your account details before submitting for organization approval.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-gradient-to-br from-purple-50/40 via-white to-slate-50 border border-purple-100 rounded-2xl p-6 space-y-6 shadow-sm">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200/60">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                        AM
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Alex Morgan</h3>
                        <p className="text-xs text-slate-500 font-medium">Senior Product Designer</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Email Verified
                    </span>
                  </div>

                  {/* Field Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                      <p className="font-semibold text-slate-800 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-500" /> alex.morgan@teamsync.io
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                      <p className="font-semibold text-slate-800 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-500" /> +1 (555) 019-2834
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Department</p>
                      <p className="font-semibold text-slate-800 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-500" /> Engineering & Development
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date of Birth</p>
                      <p className="font-semibold text-slate-800 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-500" /> August 14, 1995
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Bio Summary</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Senior Product Designer with 6+ years experience building scalable SaaS products and enterprise design systems.
                    </p>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                  <input
                    type="checkbox"
                    id="terms"
                    defaultChecked
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 leading-normal cursor-pointer">
                    I confirm that the details provided above are accurate and I agree to TeamSync's{' '}
                    <span className="text-purple-700 font-semibold underline">Terms of Service</span> and{' '}
                    <span className="text-purple-700 font-semibold underline">Privacy Policy</span>.
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons Footer */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              type="button"
              className={`px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all ${
                currentStep === 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:bg-slate-100 active:scale-95'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <div className="flex items-center gap-2">
              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  type="button"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-sm rounded-xl shadow-md shadow-purple-500/20 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  className="px-7 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:opacity-95 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-600/30 active:scale-[0.98] transition-all flex items-center gap-2.5"
                >
                  <Send className="w-4 h-4" /> Send for Approval
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400 mt-6">
          © {new Date().getFullYear()} TeamSync Platform Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}