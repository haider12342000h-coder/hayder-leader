function NewConsultationForm({
  formData,
  onChange,
  onSubmit,
  uploadedFiles,
  onFileChange,
}) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-950">إنشاء استشارة جديدة</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">
            ابدأ استشارة بسرعة مع عنوان واضح، وصف مختصر، ورفع ملفات داعمة مثل التحاليل أو الصور.
          </p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          إجراء سريع
        </span>
      </div>

      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="rounded-[22px] border border-medical-border bg-medical-soft/50 p-4">
            <span className="text-sm font-semibold text-slate-900">عنوان الاستشارة</span>
            <input
              type="text"
              value={formData.title}
              onChange={(event) => onChange('title', event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
              placeholder="مثل: صداع متكرر مع دوخة"
            />
          </label>

          <label className="rounded-[22px] border border-medical-border bg-medical-soft/50 p-4">
            <span className="text-sm font-semibold text-slate-900">التخصص المطلوب</span>
            <select
              value={formData.specialty}
              onChange={(event) => onChange('specialty', event.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-400"
            >
              <option value="طب الأسرة">طب الأسرة</option>
              <option value="الأعصاب">الأعصاب</option>
              <option value="الباطنية">الباطنية</option>
              <option value="الجلدية">الجلدية</option>
            </select>
          </label>
        </div>

        <label className="block rounded-[22px] border border-medical-border bg-medical-soft/50 p-4">
          <span className="text-sm font-semibold text-slate-900">وصف الحالة</span>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(event) => onChange('description', event.target.value)}
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-brand-400"
            placeholder="اشرح الأعراض، مدتها، وما إذا كانت هناك ملفات أو تحاليل مرتبطة بالحالة"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-[22px] border border-dashed border-brand-200 bg-brand-50/50 px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">رفع ملفات</p>
            <p className="mt-1 text-xs text-medical-muted">تحاليل / صور / تقارير طبية</p>
          </div>
          <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-brand-700">
            اختيار ملف
          </span>
          <input type="file" multiple className="hidden" onChange={onFileChange} />
        </label>

        {uploadedFiles.length ? (
          <div className="flex flex-wrap gap-2">
            {uploadedFiles.map((file) => (
              <span
                key={file}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {file}
              </span>
            ))}
          </div>
        ) : null}

        <button
          type="submit"
          className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          إنشاء الاستشارة
        </button>
      </form>
    </section>
  );
}

export default NewConsultationForm;
