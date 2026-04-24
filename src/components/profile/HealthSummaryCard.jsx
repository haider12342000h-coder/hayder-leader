function HealthSummaryCard({ summary, insights }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">الملخص الصحي الذكي</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            نظرة مختصرة مولدة آليًا لتسهيل الفهم السريع قبل مراجعة التفاصيل.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
          AI Summary
        </span>
      </div>

      <div className="mt-5 rounded-[24px] border border-emerald-100 bg-emerald-50/70 p-5">
        <p className="text-sm leading-8 text-slate-800">{summary}</p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {insights.map((item) => (
          <div key={item.label} className="rounded-[22px] border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-medical-muted">{item.label}</p>
            <p className="mt-2 text-sm font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthSummaryCard;
