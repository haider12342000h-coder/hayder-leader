function DoctorOverviewCards({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => (
        <article
          key={item.label}
          className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-medical-muted">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-950">{item.value}</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
              {item.icon}
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-medical-muted">{item.caption}</p>
        </article>
      ))}
    </div>
  );
}

export default DoctorOverviewCards;
