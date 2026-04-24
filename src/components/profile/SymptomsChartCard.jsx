function SymptomsChartCard({ title, data }) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            تمثيل بصري مبسط لشدة الأعراض عبر الوقت لتسهيل المراقبة.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          آخر 6 أسابيع
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-slate-900">{item.label}</span>
              <span className="text-medical-muted">{item.value}/10</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SymptomsChartCard;
