import EmptyState from './EmptyState';

function ConsultationsTabContent({ consultations }) {
  return (
    <div className="space-y-5">
      <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950">سجل الاستشارات</h3>
            <p className="mt-2 text-sm leading-7 text-medical-muted">
              آخر الجلسات الطبية والقرارات المرتبطة بها بترتيب زمني سهل القراءة.
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
            {consultations.length} استشارة
          </span>
        </div>

        <div className="mt-6 space-y-4">
          {consultations.map((consultation, index) => (
            <div key={consultation.id} className="grid grid-cols-[24px_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                  {index + 1}
                </span>
                {index !== consultations.length - 1 ? <span className="mt-2 h-full w-px bg-brand-100" /> : null}
              </div>

              <article className="rounded-[24px] border border-medical-border bg-gradient-to-br from-medical-soft/70 to-white p-4 transition hover:shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-sm font-bold text-slate-950">{consultation.title}</h4>
                  <span className="text-xs text-medical-muted">{consultation.date}</span>
                </div>
                <p className="mt-2 text-sm text-brand-700">{consultation.doctor}</p>
                <p className="mt-3 text-sm leading-7 text-medical-muted">{consultation.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <EmptyState
        title="لا توجد ملفات مرفقة حديثًا"
        description="يمكنك رفع تحاليل أو صور طبية داخل الاستشارات القادمة لتظهر هنا بشكل منظم ويسهل الرجوع إليها لاحقًا."
        actionLabel="إضافة ملف جديد"
      />
    </div>
  );
}

export default ConsultationsTabContent;
