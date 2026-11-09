import Navbar from '../components/Navbar';
import FormCard from '../../../../shared/ui/components/FormCard';
import ProgressStepper from '../components/ProgressStepper';
import EmailVerification from '../components/EmailVerification';
import EmployeeDetails from '../components/EmployeeDetails';
import SecurityDetails from '../components/SecurityDetails';
import RegistrationPreview from '../components/RegistrationPreview';
import RegistrationSuccess from './RegistrationSuccess';

import {useRegister} from '../../hook/registerHook'

const Register = () => {

  const registerMethod = useRegister()

  const {currentStep, setCurrentStep} = registerMethod

  const goToStep = stepNumber => {
    setCurrentStep (stepNumber);
    window.scrollTo ({top: 0, behavior: 'instant'});
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-[#18181B]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Registration Area */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Stepper only visible during Steps 1, 2, 3 and Preview (Step 4) */}
          {currentStep <= 4 &&
            <ProgressStepper
              currentStep={currentStep}
              onStepClick={goToStep}
            />}

          {/* Main Registration Card */}
          <FormCard>
            {currentStep === 1 &&
              <EmailVerification registerMethod={registerMethod} onNext={() => goToStep (2)} />}

            {currentStep === 2 &&
              <EmployeeDetails
                registerMethod={registerMethod}
                onNext={() => goToStep (3)}
                onBack={() => goToStep (1)}
              />}

            {currentStep === 3 &&
              <SecurityDetails
                registerMethod={registerMethod}  
                onNext={() => goToStep (4)}
                onBack={() => goToStep (2)}
              />}

            {currentStep === 4 &&
              <RegistrationPreview
                registerMethod={registerMethod}
                onEditStep={goToStep}
                onBack={() => goToStep (3)}
                onRegister={() => goToStep (5)}
              />}

            {currentStep === 5 && <RegistrationSuccess registerMethod={registerMethod} />}
          </FormCard>
        </div>
      </main>
    </div>
  );
};

export default Register;
