function AISummaryPanel({ summary }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">ملخص AI قبل الإرسال للطبيب</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            ملخص واضح يساعد المستخدم والطبيب على البدء من نفس نقطة الفهم.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
          جاهز للمراجعة
        </span>
      </div>

      <div className="mt-5 rounded-[24px] border border-emerald-100 bg-emerald-50/60 p-5">
        <p className="text-sm leading-8 text-slate-800">{summary.text}</p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {summary.points.map((point) => (
          <div key={point.label} className="rounded-[22px] border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-medical-muted">{point.label}</p>
            <p className="mt-2 text-sm font-bold text-slate-900">{point.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AISummaryPanel;
