import {
  User,
  Briefcase,
  Phone,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Input from "../../../../shared/ui/components/Input";
import Select from "../../../../shared/ui/components/Select";
import Button from "../../../../shared/ui/components/Button";
import TextArea from "../../../../shared/ui/components/TextArea";
import { useState } from "react";

const EmployeeDetails = ({ registerMethod, onBack }) => {
  const DEPARTMENT_OPTIONS = [
    {
      value: "hr",
      label: "Human Resources",
    },
    {
      value: "it",
      label: "Information Technology",
    },
    {
      value: "prod",
      label: "Production",
    },
    {
      value: "log",
      label: "Logistics",
    },
  ];

  const { registerData, improveBio, improvingBio, bioField, setBioField, register, handleSubmit, handlePersonalDetails, errors } = registerMethod;

  const [bioError, setBioError] = useState(null);

  return (
    <form className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
          Tell us about yourself
        </h2>
        <p className="text-sm text-[#71717A]">
          Add your employee details to set up your TeamSync profile.
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="bg-neutral-200 self-center flex items-center justify-center rounded-full h-20 w-20 overflow-hidden">
          <img
            src={registerData.avatar}
            className="object-cover"
          />
        </div>
      </div>

      {/* Two-Column Form Layout on Desktop, Stacked on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Full Name */}
        <div>
          <Input
            // {...register('name', {
            //   required: "Name is required"
            // })}
            label="Full Name"
            id="fullName"
            name="fullName"
            error={errors.name && errors.name.message}
            defaultValue={registerData.name}
            placeholder="Enter your full name"
            icon={User}
            required
            autoComplete="name"
          />
        </div>

        {/* Department Dropdown */}
        <div>
          <Select
            {...register('department', {
              required: "Department is required"
            })}
            label="Department"
            id="department"
            name="department"
            error={errors.department && errors.department.message}
            options={DEPARTMENT_OPTIONS}
            placeholder="Select department"
            icon={Briefcase}
          />
        </div>

        {/* Phone Number with Country Code */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-[#18181B] mb-1.5"
          >
            Phone Number
            <span className="text-[#6D28D9] ml-1">*</span>
          </label>
          <div className="flex rounded-lg">
            {/* Number Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#71717A]">
                <Phone className="w-4 h-4 stroke-[1.8]" />
              </div>
              <Input
                // {...register('phone', {
                //   required: "Phone number is required"
                // })}
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                error={errors.phone && errors.phone.message}
                placeholder="98765 43210"
                className={`w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-r-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] h-11 pl-9 pr-3 outline-none focus:ring-1 transition-none`}
                autoComplete="tel"
              />
            </div>
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <Input
            // {...register('dataOfBirth', {
            //   required: "Date of Birth is required"
            // })}
            label="Date of Birth"
            id="dateOfBirth"
            name="dateOfBirth"
            error={errors.dateOfBirth && errors.dateOfBirth.message}
            type="date"
            icon={Calendar}
            required
          />
        </div>

        {/* Bio: Full Width */}
        <div className="md:col-span-2">
          <label htmlFor="bio" className="text-sm font-medium text-[#18181B]">
            Bio <span className="text-[#6D28D9]">*</span>
          </label>

          <div className="mt-1.5 flex items-end flex-col gap-2">
            <TextArea
              // {...register('bio', {
              //   required: "Bio is required"
              // })}
              id="bio"
              name="bio"
              value={bioField}
              onChange={(e) => setBioField(e.target.value)}
              className="w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg p-3.5 outline-none resize-none"
              placeholder="Write a short introduction about yourself"
              rows={3}
              required
            />
            {bioError && <p className="text-red-500 text-sm w-full">{bioError}</p>}
            <button
              type="button"
              disabled={improvingBio}
              onClick={() => {
                const bio = bioField;
                if (bio.length < 10) {
                  setBioError("Enter atleast 50 characters");
                } else {
                  improveBio(bio);
                  setBioError(null)
                }
              }}
              className={`flex items-center gap-1.5 text-xs font-medium border py-1.5 px-3 rounded-full 
              ${
                improvingBio
                  ? "bg-neutral-200 border-neutral-200 text-neutral-700 cursor-not-allowed opacity-60"
                  : "bg-neutral-100 border-neutral-300 text-[#6D28D9] cursor-pointer hover:bg-neutral-200"
              }`}
            >
              <Sparkles size={14} />
              {improvingBio ? "Improving..." : "Improve Bio"}
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-[#E4E4E7]">
        <Button
          type="button"
          variant="secondary"
          size="lg"
          icon={ArrowLeft}
          onClick={onBack}
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
          Continue
        </Button>
      </div>
    </form>
  );
};

export default EmployeeDetails;
