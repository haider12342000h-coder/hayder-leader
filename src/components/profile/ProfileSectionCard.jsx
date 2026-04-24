function ProfileSectionCard({ title, description, items, isEditing, onFieldChange }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">{description}</p>
        </div>
        <span className="w-fit rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          {isEditing ? 'قابل للتعديل' : 'عرض فقط'}
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <label
            key={item.id}
            className="rounded-[24px] border border-medical-border bg-gradient-to-br from-medical-soft/70 to-white p-4 transition hover:shadow-soft"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-sm text-medical-muted">{item.label}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700 shadow-sm">
                {item.icon}
              </span>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={item.value}
                onChange={(event) => onFieldChange(item.id, event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
              />
            ) : (
              <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">{item.value}</div>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}

export default ProfileSectionCard;
