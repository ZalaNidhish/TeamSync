const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-none select-none focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#6D28D9] text-white hover:bg-[#5B21B6] active:bg-[#4C1D95] border border-transparent focus:ring-[#6D28D9]',
    secondary: 'bg-white text-[#18181B] border border-[#E4E4E7] hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100 focus:ring-[#6D28D9]',
    outline: 'bg-transparent text-[#18181B] border border-[#E4E4E7] hover:bg-[#F5F3FF] hover:border-[#6D28D9] hover:text-[#6D28D9] focus:ring-[#6D28D9]',
    ghost: 'bg-transparent text-[#71717A] hover:text-[#18181B] hover:bg-[#F5F3FF] border border-transparent focus:ring-[#6D28D9]',
    link: 'bg-transparent text-[#6D28D9] hover:text-[#5B21B6] underline-offset-4 hover:underline p-0 h-auto border-none focus:ring-0',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-10 gap-2',
    lg: 'text-base px-5 py-3 h-12 gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const cursorStyle = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthStyle} ${cursorStyle} ${className}`}
      {...props}
    >
      {Icon &&
        iconPosition === 'left' &&
        <Icon
          className={
            size === 'sm'
              ? 'w-3.5 h-3.5'
              : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
          }
        />}
      <span>{children}</span>
      {Icon &&
        iconPosition === 'right' &&
        <Icon
          className={
            size === 'sm'
              ? 'w-3.5 h-3.5'
              : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
          }
        />}
    </button>
  );
};

export default Button;
