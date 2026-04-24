function DoctorAvailabilityManager({ workingHours, bookingRequests, onToggleDay, onDecision }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[320px_1fr]">
      <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
        <h3 className="text-lg font-bold text-slate-950">إعداد ساعات العمل</h3>
        <p className="mt-2 text-sm leading-7 text-medical-muted">
          يمكن للطبيب ضبط الأيام المتاحة بسرعة من نفس الشاشة.
        </p>

        <div className="mt-5 space-y-3">
          {workingHours.map((item) => (
            <button
              key={item.day}
              type="button"
              onClick={() => onToggleDay(item.day)}
              className="flex w-full items-center justify-between rounded-[22px] bg-medical-soft/60 px-4 py-3 text-right transition hover:bg-brand-50"
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
                {item.active ? 'مفتوح' : 'مغلق'}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-950">طلبات الحجز للطبيب</h3>
            <p className="mt-2 text-sm leading-7 text-medical-muted">
              قبول أو رفض سريع للطلبات الجديدة مع الحد الأدنى من الخطوات.
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
            لوحة الطبيب
          </span>
        </div>

        <div className="mt-5 space-y-4">
          {bookingRequests.map((request) => (
            <article key={request.id} className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-950">{request.patient}</h4>
                  <p className="mt-1 text-sm text-brand-700">
                    {request.day} • {request.time}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-medical-muted">{request.reason}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => onDecision(request.id, 'مقبول')}
                    className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    قبول
                  </button>
                  <button
                    type="button"
                    onClick={() => onDecision(request.id, 'مرفوض')}
                    className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
                  >
                    رفض
                  </button>
                </div>
              </div>
              <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                الحالة الحالية: {request.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DoctorAvailabilityManager;
