function ProfileTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="rounded-[28px] border border-white/80 bg-white/95 p-3 shadow-soft backdrop-blur-xl">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={[
                'flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition',
                isActive
                  ? 'bg-brand-600 text-white shadow-soft'
                  : 'bg-medical-soft/60 text-slate-700 hover:bg-brand-50 hover:text-brand-700',
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
