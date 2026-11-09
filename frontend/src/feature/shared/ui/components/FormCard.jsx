const FormCard = ({children, className = ''}) => {
  return (
    <div
      className={`w-full max-w-2xl mx-auto bg-white rounded-xl border border-[#E4E4E7] p-6 sm:p-8 md:p-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default FormCard;
