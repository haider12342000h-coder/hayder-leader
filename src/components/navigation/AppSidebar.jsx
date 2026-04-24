import { NavLink } from 'react-router-dom';

const sections = [
  {
    title: 'وصول سريع',
    items: [
      { label: 'لوحة التحكم', to: '/' },
      { label: 'إدارة الأطباء', to: '/doctors' },
      { label: 'المساعد الذكي', to: '/ai-doctor' },
      { label: 'الادارة', to: '/admin' },
    ],
  },
  {
    title: 'إجراءات مقترحة',
    items: [
      { label: 'استشارة عاجلة', to: '/consultations' },
      { label: 'الملف الشخصي', to: '/profile' },
      { label: 'الأطباء المتابعين', to: '/followed-doctors' },
    ],
  },
];

function AppSidebar() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-32 space-y-5 rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-soft backdrop-blur-xl">
        <div className="rounded-[28px] bg-gradient-to-br from-brand-600 to-cyan-500 p-5 text-white">
          <p className="text-xs font-semibold">مساحة عمل ذكية</p>
          <h2 className="mt-2 text-lg font-bold">تنقل جانبي للسياق الإداري والطبي</h2>
          <p className="mt-3 text-sm leading-7 text-white/85">
            وجود الشريط الجانبي في الصفحات المعقدة يقلل التشتت ويحافظ على الإجراءات الأساسية ضمن متناول النظر.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 px-1 text-xs font-semibold tracking-wide text-medical-muted">
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all',
                      isActive
                        ? 'bg-brand-600 text-white shadow-soft'
                        : 'bg-medical-soft/70 text-slate-800 hover:bg-brand-50 hover:text-brand-700',
                    ].join(' ')
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs">←</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-[28px] border border-medical-border bg-medical-soft/60 p-5">
          <p className="text-sm font-bold text-slate-950">اقتراح UX</p>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            أظهر آخر عنصر تم فتحه داخل الشريط الجانبي ووفّر اختصارات محفوظة حسب دور المستخدم.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AppSidebar;
