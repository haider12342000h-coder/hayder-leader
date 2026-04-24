function BookingDoctorCard({ doctor, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(doctor.id)}
      className={[
        'rounded-[28px] border bg-white p-5 text-right shadow-soft transition hover:-translate-y-1 hover:shadow-xl',
        selected ? 'border-brand-300 ring-2 ring-brand-100' : 'border-medical-border',
      ].join(' ')}
    >
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
          {doctor.available ? 'متاح للحجز' : 'غير متاح'}
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 rounded-[22px] bg-medical-soft/70 p-4 text-center">
        <div>
          <p className="text-xs text-medical-muted">الرد</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.response}</p>
        </div>
        <div>
          <p className="text-xs text-medical-muted">التقييم</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.rating}</p>
        </div>
        <div>
          <p className="text-xs text-medical-muted">التوفر</p>
          <p className="mt-2 text-sm font-bold text-slate-900">{doctor.hours}</p>
        </div>
      </div>
    </button>
  );
}

export default BookingDoctorCard;
