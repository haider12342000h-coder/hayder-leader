function EditableInfoGrid({ title, description, items, isEditing, onFieldChange }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">{description}</p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          {isEditing ? 'وضع التعديل' : 'عرض آمن'}
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <label
            key={item.id}
            className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-sm text-medical-muted">{item.label}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700">
                {item.icon}
              </span>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={item.value}
                onChange={(event) => onFieldChange(item.id, event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-brand-400"
              />
            ) : (
              <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">
                {item.value}
              </div>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}

export default EditableInfoGrid;
