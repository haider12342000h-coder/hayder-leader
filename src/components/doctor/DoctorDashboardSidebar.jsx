function DoctorDashboardSidebar({ sections, activeSection, onSelect }) {
  return (
    <aside className="xl:sticky xl:top-32 xl:self-start">
      <div className="rounded-[32px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
        <div className="rounded-[28px] bg-gradient-to-br from-brand-600 to-cyan-500 p-5 text-white">
          <p className="text-xs font-semibold">لوحة الطبيب</p>
          <h2 className="mt-2 text-lg font-bold">تنقل سريع يدعم سير العمل</h2>
          <p className="mt-3 text-sm leading-7 text-white/85">
            تم ترتيب الأقسام حسب أكثر المهام استخدامًا أثناء اليوم الطبي لتقليل الانتقال بين الشاشات.
          </p>
        </div>

        <div className="mt-5 space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className={[
                  'flex w-full items-center justify-between rounded-2xl px-4 py-3 text-right text-sm transition-all',
                  isActive
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'bg-medical-soft/70 text-slate-800 hover:bg-brand-50 hover:text-brand-700',
                ].join(' ')}
              >
                <span>{section.label}</span>
                <span className="text-xs">{section.badge}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-[24px] border border-medical-border bg-medical-soft/50 p-4">
          <p className="text-sm font-bold text-slate-950">اقتراح UX</p>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            ثبّت قسم المحادثة والجدول بجانب بعض في الشاشات الواسعة لتقليل وقت التنقل أثناء العمل.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default DoctorDashboardSidebar;
