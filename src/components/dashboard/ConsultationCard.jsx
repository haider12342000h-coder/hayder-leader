const statusStyles = {
  'قيد المراجعة': 'bg-amber-100 text-amber-800',
  'مكتملة': 'bg-emerald-100 text-emerald-800',
  'تحتاج رد': 'bg-rose-100 text-rose-800',
};

function ConsultationCard({ consultation }) {
  return (
    <article className="rounded-[30px] border border-medical-border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={[
                'rounded-full px-3 py-1 text-xs font-semibold',
                statusStyles[consultation.status] || 'bg-slate-100 text-slate-700',
              ].join(' ')}
            >
              {consultation.status}
            </span>
            <span className="text-xs text-medical-muted">{consultation.updatedAt}</span>
          </div>
          <h3 className="mt-3 text-lg font-bold text-slate-950">{consultation.title}</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">{consultation.summary}</p>
        </div>
        <div className="rounded-[22px] bg-medical-soft/70 px-4 py-3 text-sm">
          <p className="font-semibold text-slate-900">{consultation.doctor}</p>
          <p className="mt-1 text-medical-muted">{consultation.specialty}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {consultation.meta.map((item) => (
          <div key={item.label} className="rounded-[22px] border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-xs text-medical-muted">{item.label}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          متابعة الاستشارة
        </button>
        <button
          type="button"
          className="rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          عرض الملخص
        </button>
      </div>
    </article>
  );
}

export default ConsultationCard;
