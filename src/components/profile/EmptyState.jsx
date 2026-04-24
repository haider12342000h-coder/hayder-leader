function EmptyState({ title, description, actionLabel }) {
  return (
    <div className="rounded-[28px] border border-dashed border-brand-200 bg-brand-50/50 p-6 text-center shadow-soft">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-white text-xl font-bold text-brand-700 shadow-sm">
        +
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-medical-muted">{description}</p>
      {actionLabel ? (
        <button
          type="button"
          className="mt-5 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export default EmptyState;
