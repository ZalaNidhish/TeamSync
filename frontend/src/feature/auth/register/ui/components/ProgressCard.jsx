import {Check} from 'lucide-react';

const ProgressCard = ({
  stepNumber,
  title,
  icon: Icon,
  status, // 'active' | 'completed' | 'upcoming'
  onClick,
  isClickable = false,
}) => {
  const isActive = status === 'active';
  const isCompleted = status === 'completed';

  // Base card styles
  let cardStyles = 'border-[#E4E4E7] bg-white text-[#71717A]';
  let iconContainerStyles =
    'bg-zinc-100 text-[#71717A] border border-[#E4E4E7]';
  let titleStyles = 'text-[#71717A]';
  let badgeStyles = 'bg-zinc-100 text-[#71717A]';

  if (isActive) {
    cardStyles =
      'border-[#6D28D9] bg-[#F5F3FF] text-[#18181B] ring-1 ring-[#6D28D9]';
    iconContainerStyles = 'bg-[#6D28D9] text-white shadow-none';
    titleStyles = 'text-[#6D28D9] font-semibold';
    badgeStyles =
      'bg-white text-[#6D28D9] border border-[#6D28D9]/20 font-medium';
  } else if (isCompleted) {
    cardStyles =
      'border-[#E4E4E7] bg-white text-[#18181B] hover:border-[#6D28D9]/40';
    iconContainerStyles =
      'bg-emerald-50 text-emerald-600 border border-emerald-200';
    titleStyles = 'text-[#18181B] font-medium';
    badgeStyles = 'bg-emerald-50 text-emerald-700 font-semibold';
  }

  return (
    <div
      onClick={isClickable && onClick ? onClick : undefined}
      className={`relative flex-1 p-3.5 sm:p-4 rounded-xl border transition-none text-left select-none ${cardStyles} ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="flex items-start space-x-3">
        {/* Step Icon or Completed Check */}
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-none ${iconContainerStyles}`}
        >
          {isCompleted
            ? <Check className="w-5 h-5 stroke-[2.5]" />
            : <Icon className="w-5 h-5 stroke-2" />}
        </div>

        {/* Text Details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center space-x-2">
            <span
              className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded ${badgeStyles}`}
            >
              Step {stepNumber}
            </span>
            {isCompleted &&
              <span className="text-[11px] font-medium text-emerald-600 hidden md:inline">
                Done
              </span>}
          </div>
          <h4 className={`text-sm truncate mt-1 ${titleStyles}`}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
