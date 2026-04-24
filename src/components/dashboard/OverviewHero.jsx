function OverviewHero({ badge, title, description, actions = [] }) {
  return (
    <section className="overflow-hidden rounded-[36px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl sm:p-8">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
        <div>
          <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
            {badge}
          </span>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-medical-muted sm:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => (
              <button
                key={action}
                type="button"
                className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {[
            'ألوان ذات تباين مريح للقراءة الطويلة',
            'بطاقات مرنة مع مساحات تنفس واضحة',
            'انتقالات ناعمة بدون تشويش بصري',
          ].map((point, index) => (
            <div
              key={point}
              className="rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5"
            >
              <p className="text-xs font-semibold text-brand-700">ميزة {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewHero;
