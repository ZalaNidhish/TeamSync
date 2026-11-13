import {Mail, User, ShieldCheck, ArrowLeft, Check} from 'lucide-react';
import Button from '../../../../shared/ui/components/Button';
import PreviewField from './PreviewField';
import PreviewSection from './PreviewSection';

const RegistrationPreview = ({onEditStep, onBack, onNext, registerMethod}) => {

  const {handleSubmit, registerData, handleRegister} = registerMethod

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6 text-left">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
          Review your information
        </h2>
        <p className="text-sm text-[#71717A]">
          Take a moment to review your details before completing registration.
        </p>
      </div>

      <div className="space-y-4">
        {/* Section 1 – Account Information */}
        <PreviewSection
          title="Account Information"
          icon={Mail}
          onEdit={() => onEditStep (1)}
        >
          <PreviewField label="Verified Work Email" value={registerData.email}/>
        </PreviewSection>

        {/* Section 2 – Employee Information */}
        <PreviewSection
          title="Employee Information"
          icon={User}
          onEdit={() => onEditStep (2)}
        >
          <PreviewField label="Full Name" value={registerData.name}  />
          <PreviewField label="Department" value={registerData.department} />
          <PreviewField label="Phone Number" value={registerData.phone} />
          <PreviewField label="Date of Birth" value={registerData.dateOfBirth} />
          <PreviewField label="Bio / Introduction" fullWidth value={registerData.bio} />
        </PreviewSection>

        {/* Section 3 – Security Information */}
        <PreviewSection
          title="Security Information"
          icon={ShieldCheck}
          onEdit={() => onEditStep (3)}
        >
          <PreviewField label="Account Password" value={registerData.password} />
        </PreviewSection>
      </div>

      {/* Admin Approval Notice */}
      <div className="p-3 bg-zinc-50 border border-[#E4E4E7] rounded-lg text-xs text-[#71717A] flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
        <span>
          Upon submission, your details will be forwarded to your company administrator for registration approval.
        </span>
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
          Back to Edit
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Check}
          iconPosition="right"
          className="w-full sm:w-auto px-10 font-semibold shadow-none"
        >
          Submit for Approval
        </Button>
      </div>
    </form>
  );
};

export default RegistrationPreview;
