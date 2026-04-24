function ProfileSummaryStrip({ items }) {
  const toneStyles = {
    brand: 'from-brand-50 to-white text-brand-700',
    cyan: 'from-cyan-50 to-white text-cyan-700',
    rose: 'from-rose-50 to-white text-rose-700',
    emerald: 'from-emerald-50 to-white text-emerald-700',
  };

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.label}
          className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-5 h-1.5 rounded-full bg-slate-100">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-medical-muted">{item.label}</p>
              <p className="mt-3 text-2xl font-bold text-slate-950">{item.value}</p>
            </div>
            <span
              className={[
                'flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold shadow-sm transition group-hover:scale-105',
                toneStyles[item.tone] ?? toneStyles.brand,
              ].join(' ')}
            >
              {item.icon}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-medical-muted">{item.caption}</p>
        </article>
      ))}
    </section>
  );
}

export default ProfileSummaryStrip;
