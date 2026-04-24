function PreDiagnosisForm({
  questions,
  formState,
  symptomText,
  onQuestionChange,
  onSymptomChange,
  onGenerate,
}) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">نموذج التقييم الأولي</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            أسئلة ديناميكية قصيرة لتجميع السياق الطبي بسرعة قبل إرسال الحالة للطبيب.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          Pre-diagnosis
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {questions.map((question) => (
          <label
            key={question.id}
            className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-slate-900">{question.label}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700">
                {question.icon}
              </span>
            </div>
            <select
              value={formState[question.id]}
              onChange={(event) => onQuestionChange(question.id, event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
            >
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <label className="mt-4 block rounded-[24px] border border-medical-border bg-medical-soft/50 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-900">إدخال الأعراض</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700">
            ع
          </span>
        </div>
        <textarea
          rows={5}
          value={symptomText}
          onChange={(event) => onSymptomChange(event.target.value)}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-brand-400"
          placeholder="اكتب الأعراض الحالية، متى بدأت، وما إذا كانت هناك عوامل تزيدها أو تخففها..."
        />
      </label>

      <button
        type="button"
        onClick={onGenerate}
        className="mt-5 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        إنشاء الملخص الذكي
      </button>
    </section>
  );
}

export default PreDiagnosisForm;
