import {ArrowRight, Building2, User, Mail, FileCheck2} from 'lucide-react';
import Button from '../../../../shared/ui/components/Button';
import {useNavigate} from 'react-router';

const RegistrationSuccess = () => {
  const currentDate = new Date ().toLocaleDateString ('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const navigate = useNavigate ();

  return (
    <div className="text-center space-y-3 ">
      {/* Heading & Subtitle */}
      <div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
          Registration Submitted for Approval
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="bg-[#F5F3FF] border border-[#6D28D9]/20 rounded-xl p-4 text-left flex items-start space-x-3 max-w-lg mx-auto">
        <div className="p-1 rounded-md bg-white border border-[#E4E4E7] text-[#6D28D9] shrink-0 mt-0.5">
          <Mail className="w-4 h-4 stroke-2" />
        </div>
        <div className="text-xs text-[#18181B] space-y-1">
          <p className="text-[#71717A]">
            Once
            {' '}
            <span className="font-medium text-[#18181B]">
              Admin
            </span>
            {' '}
            reviews and approves your account, you can login using email and password.
          </p>
        </div>
      </div>

      {/* Submitted Details Summary Card */}
      <div className="bg-zinc-50/70 border border-[#E4E4E7] rounded-xl p-4 sm:p-5 text-left max-w-lg mx-auto space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]">
          <span className="text-xs font-semibold text-[#71717A] uppercase tracking-wider">
            Submission Receipt
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-center space-x-2 text-[#18181B]">
            <User className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span className="text-[#71717A]">Applicant:</span>
            <span className="font-medium truncate"> </span>
          </div>

          <div className="flex items-center space-x-2 text-[#18181B]">
            <Building2 className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span className="text-[#71717A]">Department:</span>
            <span className="font-medium truncate" />
          </div>

          <div className="flex items-center space-x-2 text-[#18181B]">
            <Mail className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span className="text-[#71717A]">Work Email:</span>
            <span className="font-medium truncate" />
          </div>

          <div className="flex items-center space-x-2 text-[#18181B]">
            <FileCheck2 className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span className="text-[#71717A]">Date:</span>
            <span className="font-medium truncate">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
        <Button
          type="button"
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          className="w-full sm:w-auto px-8"
          onClick={() => navigate ('/auth/login')}
        >
          Return to Login
        </Button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
