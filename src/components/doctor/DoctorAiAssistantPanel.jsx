function DoctorAiAssistantPanel({ suggestions, summaryPoints }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
      <section className="rounded-[30px] border border-medical-border bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-950">اقتراحات ردود سريعة</h3>
            <p className="mt-1 text-xs text-medical-muted">اختصارات تقلل وقت الكتابة وتسرّع إغلاق الاستشارة</p>
          </div>
          <button
            type="button"
            className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            إنشاء اقتراح جديد
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {suggestions.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-700">
                  {item.category}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-medical-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-medical-border bg-white p-5 shadow-soft">
        <h3 className="text-base font-bold text-slate-950">تلخيص الحالة</h3>
        <div className="mt-4 space-y-3">
          {summaryPoints.map((point) => (
            <div key={point} className="rounded-[22px] bg-medical-soft/60 px-4 py-3 text-sm leading-7 text-slate-800">
              {point}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DoctorAiAssistantPanel;
