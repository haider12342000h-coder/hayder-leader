function ProfileHeaderCard({ profile, isEditing, onToggleEdit }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-6 xl:grid-cols-[320px_1fr] xl:items-center">
        <div className="rounded-[28px] bg-gradient-to-br from-brand-600 to-cyan-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              ملف مؤمن
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              تحقق بخطوتين
            </span>
          </div>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/20 text-2xl font-bold text-white">
              {profile.initials}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="mt-1 text-sm text-white/85">{profile.subtitle}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {profile.trustBadges.map((badge) => (
              <div key={badge} className="rounded-2xl bg-white/10 px-4 py-3 text-sm">
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {profile.highlights.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-medical-border bg-medical-soft/50 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-medical-muted">{item.label}</p>
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700">
                  {item.icon}
                </span>
              </div>
              <p className="mt-3 text-lg font-bold text-slate-950">{item.value}</p>
            </div>
          ))}
          <button
            type="button"
            onClick={onToggleEdit}
            className={[
              'rounded-[24px] px-5 py-4 text-right text-sm font-semibold transition',
              isEditing
                ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                : 'border border-brand-200 bg-brand-50 text-brand-700 hover:bg-brand-100',
            ].join(' ')}
          >
            {isEditing ? 'حفظ التعديلات المبدئية' : 'تعديل البيانات'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeaderCard;
