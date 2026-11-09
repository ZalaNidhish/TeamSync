const TextArea = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  rows = 3,
  maxLength = 300,
  className = '',
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
        <textarea
          id={inputId}
          name={name}
          rows={rows}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full bg-white text-[#18181B] placeholder-[#71717A] text-sm rounded-lg border ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-400' : 'border-[#E4E4E7] focus:border-[#6D28D9] focus:ring-[#6D28D9]'} p-3.5 outline-none focus:ring-1 resize-none transition-none disabled:bg-zinc-50 disabled:text-zinc-400 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextArea;
