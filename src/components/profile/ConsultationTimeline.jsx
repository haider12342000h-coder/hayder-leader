function ConsultationTimeline({ events }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <h3 className="text-lg font-bold text-slate-950">الخط الزمني للاستشارات</h3>
      <p className="mt-2 text-sm leading-7 text-medical-muted">
        تسلسل واضح للجلسات السابقة لتتبع التغيرات والخطط العلاجية بسهولة.
      </p>

      <div className="mt-6 space-y-5">
        {events.map((event, index) => (
          <div key={event.id} className="grid grid-cols-[24px_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                {index + 1}
              </span>
              {index !== events.length - 1 ? <span className="mt-2 h-full w-px bg-brand-100" /> : null}
            </div>
            <article className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-sm font-bold text-slate-950">{event.title}</h4>
                <span className="text-xs text-medical-muted">{event.date}</span>
              </div>
              <p className="mt-2 text-sm text-brand-700">{event.doctor}</p>
              <p className="mt-3 text-sm leading-7 text-medical-muted">{event.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConsultationTimeline;
