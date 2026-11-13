import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";

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
  const { registerData, improveBio, improvingBio, bioField, setBioField, departments, watch, register, handleSubmit, handlePersonalDetails, errors } = registerMethod;
  const [bioError, setBioError] = useState(null);  
  const fileRef = useRef(null);
  
  // const [resume, setResume] = useState(null)
  // const handleImproveBio = () => {
  //   if (!resume) {
  //       fileRef.current.click();
  //       return;
  //   }

  //   const formData = new FormData();
  //   formData.append("resume", resume);
  //   console.log(formData);
  //   improveBio(formData);
  // };

  return (
    <form onSubmit={handleSubmit(handlePersonalDetails)} className="space-y-6 text-left">

      <div className="w-full flex gap-4 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#18181B] tracking-tight">
            Tell us about yourself
          </h2>
          <p className="text-sm text-[#71717A]">
            Add your employee details to set up your TeamSync profile.
          </p>
        </div>
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
            <label htmlFor="name">Full Name</label>
            <input
              {...register('name', {
                required: "Required"
              })}
              type="text"
              defaultValue={registerData.name}
              placeholder="Enter your Full Name"
              className="w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] p-3 outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400"
              autoComplete="email"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Department Dropdown */}
        <div>
          <label htmlFor="department">Select Department</label>
          <select
            {...register('department',{
              required: "Reequired"
            })}
            className={`w-full bg-white text-[#18181B] text-sm rounded-lg border  h-11 px-3.5 pr-10 appearance-none outline-none focus:ring-1 transition-none cursor-pointer disabled:bg-zinc-50 disabled:cursor-not-allowed`}
            defaultValue={registerData.department || ''}
          >
              <option value="" disabled className="text-[#71717A]">Select Department</option>
            {departments?.map (opt => {
              return (
                <option key={opt._id} value={opt._id} className="text-[#18181B]">
                  {opt.departmentName}
                </option>
              );
            })}
          </select>
          {errors.department && <p className="text-sm text-red-500">{errors.department.message}</p>}
        </div>

        {/* Phone Number with Country Code */}
        <div>
            <label htmlFor="phone">Phone</label>
            <input
              {...register('phone', {
                required: "Required"
              })}
              type="number"
              defaultValue={registerData.phone}
              placeholder="Enter your phone number"
              className="w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] p-3 outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400"
              autoComplete="tel"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              {...register('dateOfBirth', {
                required: "Required",
              })}
              type="date"
              defaultValue={registerData.dateOfBirth}
              className="w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] p-3 outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400"
              autoComplete="email"
            />
            {errors.dateOfBirth && <p className="text-red-600 text-sm">{errors.dateOfBirth.message}</p>}

        </div>

        {/* Bio: Full Width */}
        <div className="md:col-span-2">
            <label htmlFor="bio">Bio</label>
          <div className="flex items-end flex-col gap-2">
            <textarea
              {...register('bio', {
                required: "Required"
              })}
              value={bioField}
              onChange={e=>setBioField(e.target.value)}
              placeholder="Enter a proffesional Bio"
              rows="3"
              className="w-full resize-none bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9] p-3 outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400"
            />
            {errors.bio && <p className="text-red-500 text-sm w-full">{errors.bio.message}</p>}
            {bioError && <p className="text-red-500 text-sm w-full">{bioError}</p>}
            <div className="flex gap-4">
              <input 
                type="file" 
                name="file" 
                ref={fileRef} 
                hidden 
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const formData = new FormData();
                    formData.append("resume", file);
                    improveBio(formData);
                }}/>
              <button
                type="button"
                onClick={()=>fileRef.current.click()}
                disabled={improvingBio}
                className={`flex items-center gap-1.5 text-xs font-medium border py-1.5 px-3 rounded-full 
                ${
                  improvingBio
                    ? "bg-neutral-200 border-neutral-200 text-neutral-700 cursor-not-allowed opacity-60"
                    : "bg-neutral-100 border-neutral-300 text-[#6D28D9] cursor-pointer hover:bg-neutral-200"
                }`}
              >
                <Sparkles size={14} />
                {improvingBio ? "Extracting..." : "Extract from Resume"}
              </button>
              <button
                type="button"
                disabled={improvingBio}
                onClick={() => {
                  const bio = watch('bio');
                  if (bio.length < 20) {
                    setBioError("Enter atleast 20 characters");
                  } else {
                    improveBio(bio.value);
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
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-[#E4E4E7]">
        <button
          type="button"
          onClick={onBack}
          className="bg-neutral-100 border border-neutral-300 px-10 py-2 rounded-md flex gap-4 items-center cursor-pointer hover:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <button
          type="submit"
          className="bg-[#6D28D9] text-white border border-neutral-300 px-10 py-2 rounded-md flex gap-4 items-center cursor-pointer hover:scale-95"
        >
          Next <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
};

export default EmployeeDetails;
