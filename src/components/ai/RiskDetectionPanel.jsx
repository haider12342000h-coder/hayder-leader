function RiskDetectionPanel({ riskLevel, riskNotes }) {
  const riskStyle =
    riskLevel === 'critical'
      ? 'border-rose-200 bg-rose-50 text-rose-800'
      : 'border-amber-200 bg-amber-50 text-amber-800';

  const riskLabel = riskLevel === 'critical' ? 'حالة حرجة محتملة' : 'يحتاج انتباه';

  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">كشف المخاطر</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            إبراز الحالات الحرجة بصريًا يساعد على بناء الثقة ويقلل خطر تجاهل الأعراض المهمة.
          </p>
        </div>
        <span className={['rounded-full border px-3 py-2 text-xs font-semibold', riskStyle].join(' ')}>
          {riskLabel}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {riskNotes.map((note) => (
          <div key={note} className={['rounded-[22px] border px-4 py-3 text-sm leading-7', riskStyle].join(' ')}>
            {note}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskDetectionPanel;
