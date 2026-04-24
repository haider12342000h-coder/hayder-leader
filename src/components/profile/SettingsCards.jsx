function SettingsCards({ settings, isEditing, onFieldChange }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {settings.map((setting) => (
        <article
          key={setting.id}
          className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-950">{setting.title}</h3>
              <p className="mt-2 text-sm leading-7 text-medical-muted">{setting.description}</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
              {setting.icon}
            </span>
          </div>

          <div className="mt-5">
            {isEditing ? (
              <input
                type="text"
                value={setting.value}
                onChange={(event) => onFieldChange(setting.id, event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-brand-400"
              />
            ) : (
              <div className="rounded-2xl bg-medical-soft/60 px-4 py-3 text-sm font-semibold text-slate-900">
                {setting.value}
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

export default SettingsCards;
