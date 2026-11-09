import React from 'react';
import {Mail, User, ShieldCheck, ChevronRight} from 'lucide-react';
import ProgressCard from './ProgressCard';

const STEPS = [
  {
    stepNumber: 1,
    title: 'Verify Email',
    icon: Mail,
  },
  {
    stepNumber: 2,
    title: 'Employee Details',
    icon: User,
  },
  {
    stepNumber: 3,
    title: 'Secure Account',
    icon: ShieldCheck,
  },
];

const ProgressStepper = ({currentStep, onStepClick}) => {
  const getStepStatus = stepNumber => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div className="w-full mb-8">
      {/* Desktop & Tablet: Horizontal Cards with Subtle Connectors */}
      <div className="hidden sm:flex items-center gap-3">
        {STEPS.map ((step, index) => {
          const status = getStepStatus (step.stepNumber);
          const isClickable = step.stepNumber < currentStep;

          return (
            <React.Fragment key={step.stepNumber}>
              <ProgressCard
                stepNumber={step.stepNumber}
                title={step.title}
                subtitle={step.subtitle}
                icon={step.icon}
                status={status}
                isClickable={isClickable}
                onClick={() =>
                  isClickable && onStepClick && onStepClick (step.stepNumber)}
              />

              {index < STEPS.length - 1 &&
                <div className="shrink-0 text-[#E4E4E7]">
                  <ChevronRight className="w-4 h-4 text-zinc-300 stroke-2" />
                </div>}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Stepper: Compact, clean, and easily readable */}
      <div className="sm:hidden bg-white border border-[#E4E4E7] rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#6D28D9] tracking-wide uppercase">
            Step {Math.min (currentStep, 3)} of 3
          </span>
          <span className="text-xs font-medium text-[#18181B]">
            {currentStep === 1
              ? 'Verify Email'
              : currentStep === 2
                  ? 'Employee Details'
                  : currentStep === 3 ? 'Secure Account' : 'Review & Confirm'}
          </span>
        </div>

        {/* 3 Step progress bar on mobile */}
        <div className="grid grid-cols-3 gap-2">
          {STEPS.map (step => {
            const status = getStepStatus (step.stepNumber);
            let barColor = 'bg-zinc-200';
            if (status === 'active') barColor = 'bg-[#6D28D9]';
            if (status === 'completed') barColor = 'bg-emerald-600';

            return (
              <div key={step.stepNumber} className="space-y-1">
                <div className={`h-1.5 rounded-full ${barColor}`} />
                <p
                  className={`text-[10px] text-center truncate ${status === 'active' ? 'text-[#6D28D9] font-semibold' : status === 'completed' ? 'text-emerald-700 font-medium' : 'text-[#71717A]'}`}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
