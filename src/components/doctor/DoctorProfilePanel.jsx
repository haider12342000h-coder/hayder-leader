function DoctorProfilePanel({ profile }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[340px_1fr]">
      <aside className="rounded-[30px] border border-medical-border bg-white p-6 shadow-soft">
        <div className="flex flex-col items-center rounded-[28px] bg-gradient-to-b from-brand-50 to-white p-6 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-brand-500 to-cyan-400 text-2xl font-bold text-white shadow-soft">
            {profile.initials}
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-950">{profile.name}</h3>
          <p className="mt-1 text-sm text-medical-muted">{profile.specialty}</p>
          <button
            type="button"
            className="mt-5 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            تعديل الملف
          </button>
        </div>
      </aside>

      <div className="grid gap-4 md:grid-cols-2">
        {profile.groups.map((group) => (
          <section key={group.title} className="rounded-[28px] border border-medical-border bg-white p-5 shadow-soft">
            <h3 className="text-base font-bold text-slate-950">{group.title}</h3>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-medical-soft/60 px-4 py-3">
                  <span className="text-sm text-medical-muted">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default DoctorProfilePanel;
