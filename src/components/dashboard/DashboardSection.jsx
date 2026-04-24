function DashboardSection({ title, description, actionLabel, children }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/90 p-5 shadow-soft backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-950 sm:text-xl">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-7 text-medical-muted">{description}</p>
          ) : null}
        </div>
        {actionLabel ? (
          <button
            type="button"
            className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default DashboardSection;
