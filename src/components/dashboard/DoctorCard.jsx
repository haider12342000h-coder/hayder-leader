function DoctorCard({ doctor, compact = false }) {
  return (
    <article className="group rounded-[30px] border border-medical-border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-brand-500 to-cyan-400 text-lg font-bold text-white">
            {doctor.initials}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-950">{doctor.name}</h3>
            <p className="mt-1 text-sm text-brand-700">{doctor.specialty}</p>
          </div>
        </div>
        <span
          className={[
            'rounded-full px-3 py-1 text-xs font-semibold',
            doctor.available ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600',
          ].join(' ')}
        >
          {doctor.available ? 'متاح الآن' : 'خارج الخدمة'}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 rounded-[24px] bg-medical-soft/70 p-4 text-center">
        <div>
          <p className="text-xs text-medical-muted">الخبرة</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.experience}</p>
        </div>
        <div>
          <p className="text-xs text-medical-muted">التقييم</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.rating}</p>
        </div>
        <div>
          <p className="text-xs text-medical-muted">الرد</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.response}</p>
        </div>
      </div>

      {!compact ? <p className="mt-4 text-sm leading-7 text-medical-muted">{doctor.bio}</p> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          حجز استشارة
        </button>
        <button
          type="button"
          className="rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          عرض الملف
        </button>
      </div>
    </article>
  );
}

export default DoctorCard;
