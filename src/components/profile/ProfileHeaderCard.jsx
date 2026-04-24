function ProfileHeaderCard({ profile, isEditing, onToggleEdit }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-brand-600 to-cyan-500 text-2xl font-bold text-white shadow-soft">
                {profile.initials}
              </div>
              <div>
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  ملف طبي آمن
                </span>
                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{profile.name}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-medical-muted">{profile.subtitle}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onToggleEdit}
              className={[
                'rounded-full px-5 py-3 text-sm font-semibold transition',
                isEditing
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-brand-600 text-white hover:bg-brand-700',
              ].join(' ')}
            >
              {isEditing ? 'إنهاء التعديل' : 'تعديل الملف'}
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.trustBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-brand-100 bg-brand-50/70 px-4 py-2 text-sm font-medium text-brand-800"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {profile.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-medical-muted">{item.label}</p>
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700">
                  {item.icon}
                </span>
              </div>
              <p className="mt-3 text-lg font-bold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileHeaderCard;
