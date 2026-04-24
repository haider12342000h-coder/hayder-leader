function MedicationCards({ medications, isEditing, onFieldChange }) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      {medications.map((medication) => (
        <article
          key={medication.id}
          className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-950">{medication.name}</h3>
              <p className="mt-1 text-sm text-brand-700">{medication.schedule}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              {medication.status}
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ['الجرعة', medication.dose, 'dose'],
              ['الغرض الطبي', medication.purpose, 'purpose'],
              ['آخر تحديث', medication.updatedAt, 'updatedAt'],
            ].map(([label, value, field]) => (
              <label
                key={field}
                className="flex flex-col gap-2 rounded-2xl bg-medical-soft/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-medical-muted">{label}</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={value}
                    onChange={(event) => onFieldChange(medication.id, field, event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 sm:w-52"
                  />
                ) : (
                  <span className="text-sm font-semibold text-slate-900">{value}</span>
                )}
              </label>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default MedicationCards;
