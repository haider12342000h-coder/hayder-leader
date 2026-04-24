function BookingConfirmationModal({ isOpen, booking, onClose, onConfirm }) {
  if (!isOpen || !booking) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4">
      <div className="w-full max-w-lg rounded-[32px] border border-white/80 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-950">تأكيد الحجز</h3>
            <p className="mt-2 text-sm leading-7 text-medical-muted">
              راجع البيانات مرة أخيرة ثم أكد الموعد.
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
            3. التأكيد
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ['الطبيب', booking.doctor],
            ['اليوم', booking.day],
            ['التاريخ', booking.date],
            ['الوقت', booking.time],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl bg-medical-soft/60 px-4 py-3">
              <span className="text-sm text-medical-muted">{label}</span>
              <span className="text-sm font-semibold text-slate-900">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            تأكيد الموعد
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            رجوع
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmationModal;
