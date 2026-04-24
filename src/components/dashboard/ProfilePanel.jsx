function ProfilePanel() {
  return (
    <aside className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col items-center rounded-[28px] bg-gradient-to-b from-brand-50 to-white p-6 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-brand-500 to-cyan-400 text-2xl font-bold text-white shadow-soft">
          هـ
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-950">هيدر أحمد</h2>
        <p className="mt-1 text-sm text-medical-muted">مستخدم نشط • آخر تحديث للملف اليوم</p>
        <button
          type="button"
          className="mt-5 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          تحديث البيانات
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {[
          ['فصيلة الدم', '+O'],
          ['الحساسيات', 'البنسلين'],
          ['الطبيب المتابع', 'د. ريم السعدي'],
          ['التأمين', 'نشط حتى 12/2026'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-2xl bg-medical-soft/70 px-4 py-3">
            <span className="text-sm text-medical-muted">{label}</span>
            <span className="text-sm font-semibold text-slate-900">{value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default ProfilePanel;
