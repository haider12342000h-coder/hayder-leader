function EmptyState({ title, description, actionLabel }) {
  return (
    <section className="rounded-[32px] border border-dashed border-brand-200 bg-white/85 p-6 text-center shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-brand-50 text-xl font-bold text-brand-700">
        +
      </div>
      <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-medical-muted">{description}</p>
      <button
        type="button"
        className="mt-5 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        {actionLabel}
      </button>
    </section>
  );
}

export default EmptyState;
