function PageSkeleton() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl">
        <div className="animate-pulse">
          <div className="h-5 w-32 rounded-full bg-slate-200" />
          <div className="mt-4 h-10 w-3/4 rounded-full bg-slate-100" />
          <div className="mt-4 h-4 w-full rounded-full bg-slate-100" />
          <div className="mt-2 h-4 w-5/6 rounded-full bg-slate-100" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-soft"
          >
            <div className="animate-pulse">
              <div className="h-4 w-24 rounded-full bg-slate-200" />
              <div className="mt-4 h-8 w-20 rounded-full bg-slate-100" />
              <div className="mt-4 h-3 w-full rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-soft"
          >
            <div className="animate-pulse space-y-4">
              <div className="h-5 w-36 rounded-full bg-slate-200" />
              <div className="h-4 w-full rounded-full bg-slate-100" />
              <div className="h-4 w-4/5 rounded-full bg-slate-100" />
              <div className="h-28 rounded-[24px] bg-slate-100" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PageSkeleton;
