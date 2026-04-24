function ProfileTabs({ tabs, activeTab, onChange }) {
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="rounded-[28px] border border-white/80 bg-white/95 p-3 shadow-soft backdrop-blur-xl">
      <div className="mb-3 flex flex-col gap-3 rounded-[22px] bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{currentTab?.label}</p>
          <p className="mt-1 text-sm leading-7 text-medical-muted">{currentTab?.description}</p>
        </div>
        <span className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-semibold text-brand-700">
          اعرض تبويبًا واحدًا في كل مرة
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={[
                'flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-brand-100',
                isActive ? 'bg-brand-600 text-white shadow-soft' : 'bg-medical-soft/60 text-slate-700 hover:bg-brand-50 hover:text-brand-700',
              ].join(' ')}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-xs">
                {tab.icon}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileTabs;
