const PreviewField = ({label, value, fullWidth = false, badge}) => {
  return (
    <div className={`space-y-1 text-left ${fullWidth ? 'sm:col-span-2' : ''}`}>
      <span className="block text-xs font-medium text-[#71717A]">
        {label}
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-[#18181B] wrap-break-words">
          {value || '—'}
        </span>
        {badge}
      </div>
    </div>
  );
};

export default PreviewField;
