import {ChevronDown} from 'lucide-react';

const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  icon: Icon,
  helperText,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const selectId = id || name;

  return (
    <div className="w-full text-left">
      {label &&
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-[#18181B] mb-1.5"
        >
          {label}
          {required && <span className="text-[#6D28D9] ml-1">*</span>}
        </label>}

      <div className="relative rounded-lg">
        {Icon &&
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#71717A]">
            <Icon className="w-4 h-4 stroke-[1.8]" />
          </div>}

        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full bg-white text-[#18181B] text-sm rounded-lg border ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-400' : 'border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9]'} h-11 px-3.5 ${Icon ? 'pl-10' : ''} pr-10 appearance-none outline-none focus:ring-1 transition-none cursor-pointer disabled:bg-zinc-50 disabled:cursor-not-allowed ${!value ? 'text-[#71717A]' : 'text-[#18181B]'} ${className}`}
          {...props}
        >
          {placeholder &&
            <option value="" disabled className="text-[#71717A]">
              {placeholder}
            </option>}
          {options.map (opt => {
            const optVal = typeof opt === 'string' ? opt : opt.value;
            const optLabel = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={optVal} value={optVal} className="text-[#18181B]">
                {optLabel}
              </option>
            );
          })}
        </select>

        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#71717A]">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {error
        ? <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
        : helperText
            ? <p className="mt-1.5 text-xs text-[#71717A]">{helperText}</p>
            : null}
    </div>
  );
};

export default Select;
