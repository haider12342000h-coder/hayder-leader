function CalendarGrid({ days, selectedDayId, onSelectDay }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-950">1. اختر اليوم</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            عرض تقويم مبسط يركز على الأيام المتاحة فقط لتقليل الحيرة وتسريع الحجز.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          تقويم نظيف
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {days.map((day) => {
          const isSelected = day.id === selectedDayId;

          return (
            <button
              key={day.id}
              type="button"
              onClick={() => onSelectDay(day.id)}
              className={[
                'rounded-[24px] border p-4 text-right transition',
                isSelected
                  ? 'border-brand-300 bg-brand-50 ring-2 ring-brand-100'
                  : 'border-medical-border bg-white hover:border-brand-200 hover:bg-brand-50/40',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-950">{day.dayName}</p>
                  <p className="mt-1 text-xs text-medical-muted">{day.dateLabel}</p>
                </div>
                <span
                  className={[
                    'rounded-full px-3 py-1 text-[11px] font-semibold',
                    day.available ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600',
                  ].join(' ')}
                >
                  {day.available ? 'متاح' : 'مغلق'}
                </span>
              </div>
              <p className="mt-4 text-sm text-brand-700">{day.slots.length} مواعيد متاحة</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarGrid;
