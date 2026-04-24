function SmartRecommendationsPanel({ recommendations }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">توصيات ذكية</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            توصيات عملية ومختصرة تساعد المستخدم على معرفة الخطوة التالية دون التباس.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          Smart Recommendations
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {recommendations.map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-700">
                {item.type}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-medical-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SmartRecommendationsPanel;
