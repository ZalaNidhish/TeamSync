const Input = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon: Icon,
  rightElement,
  helperText,
  error,
  required = false,
  disabled = false,
  className = '',
  autoComplete,
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className="w-full text-left">
      {label &&
        <label
          htmlFor={inputId}
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

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-400' : 'border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9]'} h-11 px-3.5 ${Icon ? 'pl-10' : ''} ${rightElement ? 'pr-11' : ''} outline-none focus:ring-1 transition-none disabled:bg-zinc-50 disabled:text-zinc-400 ${className}`}
          {...props}
        />

        {rightElement &&
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>}
      </div>

      {error
        ? <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
        : helperText
            ? <p className="mt-1.5 text-xs text-[#71717A]">{helperText}</p>
            : null}
    </div>
  );
};

export default Input;
