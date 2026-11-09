import {Pencil} from 'lucide-react';

const PreviewSection = ({title, icon: Icon, onEdit, children}) => {
  return (
    <div className="bg-white rounded-xl border border-[#E4E4E7] p-5 sm:p-6 text-left transition-none">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4E4E7]">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F5F3FF] border border-[#E4E4E7] flex items-center justify-center text-[#6D28D9]">
            <Icon className="w-4 h-4 stroke-2" />
          </div>
          <h3 className="text-base font-semibold text-[#18181B]">
            {title}
          </h3>
        </div>

        {onEdit &&
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#6D28D9] hover:text-[#5B21B6] bg-[#F5F3FF] hover:bg-[#6D28D9]/10 px-2.5 py-1.5 rounded-md cursor-pointer transition-none border border-[#6D28D9]/20 focus:outline-none"
            aria-label={`Edit ${title}`}
          >
            <Pencil className="w-3 h-3" />
            <span>Edit</span>
          </button>}
      </div>

      {/* Grid content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
        {children}
      </div>
    </div>
  );
};

export default PreviewSection;
