function TimeSlotsPanel({ day, selectedSlotId, onSelectSlot }) {
  if (!day) {
    return null;
  }

  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-950">2. اختر الوقت</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            فترات زمنية واضحة مع إبراز الفترات الشاغرة لتقليل وقت اتخاذ القرار.
          </p>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
          {day.dayName}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {day.slots.map((slot) => {
          const isSelected = selectedSlotId === slot.id;

          return (
            <button
              key={slot.id}
              type="button"
              disabled={!slot.available}
              onClick={() => onSelectSlot(slot.id)}
              className={[
                'rounded-[22px] border px-4 py-4 text-sm font-semibold transition',
                !slot.available
                  ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
                  : isSelected
                    ? 'border-brand-300 bg-brand-600 text-white shadow-soft'
                    : 'border-medical-border bg-white text-slate-900 hover:border-brand-200 hover:bg-brand-50',
              ].join(' ')}
            >
              {slot.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TimeSlotsPanel;
