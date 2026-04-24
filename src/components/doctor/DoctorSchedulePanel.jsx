function DoctorSchedulePanel({ schedule, availability }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
      <div className="rounded-[30px] border border-medical-border bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950">عرض الجدول</h3>
            <p className="mt-1 text-xs text-medical-muted">واجهة منظمة للمواعيد اليومية والأسبوعية</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            تبديل إلى الأسبوع
          </button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {schedule.map((slot) => (
            <article key={slot.id} className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-slate-950">{slot.day}</p>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                  {slot.time}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{slot.title}</p>
              <p className="mt-2 text-sm leading-7 text-medical-muted">{slot.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-medical-border bg-white p-5 shadow-soft">
        <h3 className="text-base font-bold text-slate-950">تحديد التوفر</h3>
        <div className="mt-4 space-y-3">
          {availability.map((item) => (
            <label
              key={item.day}
              className="flex items-center justify-between rounded-[20px] bg-medical-soft/60 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.day}</p>
                <p className="mt-1 text-xs text-medical-muted">{item.hours}</p>
              </div>
              <span
                className={[
                  'rounded-full px-3 py-1 text-xs font-semibold',
                  item.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600',
                ].join(' ')}
              >
                {item.active ? 'متاح' : 'مغلق'}
              </span>
            </label>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          حفظ التوفر
        </button>
      </div>
    </div>
  );
}

export default DoctorSchedulePanel;
