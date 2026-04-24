function ConsultationFilters({ searchValue, onSearchChange, activeFilter, onFilterChange, filters }) {
  return (
    <div className="rounded-[28px] border border-white/80 bg-white/95 p-4 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex w-full items-center gap-3 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 lg:max-w-md">
          <span className="text-sm font-bold text-brand-700">بحث</span>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="ابحث باسم الطبيب أو عنوان الاستشارة"
            className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={[
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                activeFilter === filter.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-100',
              ].join(' ')}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConsultationFilters;
