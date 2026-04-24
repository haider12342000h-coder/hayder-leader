function ProfileSidebarCard({ healthSummary, alerts }) {
  return (
    <div className="space-y-5 xl:sticky xl:top-28">
      <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-950">الملخص الصحي</h3>
            <p className="mt-1 text-sm text-medical-muted">أهم المعلومات قبل التفاصيل</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            موثوق
          </span>
        </div>

        <p className="mt-4 text-sm leading-8 text-slate-700">{healthSummary.text}</p>

        <div className="mt-5 space-y-3">
          {healthSummary.insights.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-2xl bg-medical-soft/60 px-4 py-3">
              <span className="text-sm text-medical-muted">{item.label}</span>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-rose-200 bg-rose-50/80 p-5 shadow-soft">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-rose-900">تنبيهات مهمة</h3>
            <p className="mt-1 text-sm text-rose-800">يجب أن تبقى ظاهرة دائمًا</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700">
            أولوية
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {alerts.map((alert) => (
            <div key={alert} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">
              {alert}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
        <h3 className="text-base font-bold text-slate-950">ملاحظات الاستخدام</h3>
        <div className="mt-4 space-y-3 text-sm leading-7 text-medical-muted">
          <p>المعلومات الحساسة ثابتة في العمود الجانبي لتقليل الرجوع لأعلى الصفحة.</p>
          <p>كل تبويب يعرض نوعًا واحدًا من المحتوى فقط لتقليل التشويش.</p>
          <p>التعديل متاح من نفس القسم دون تغيير السياق أو إرباك المستخدم.</p>
        </div>
      </section>
    </div>
  );
}

export default ProfileSidebarCard;
