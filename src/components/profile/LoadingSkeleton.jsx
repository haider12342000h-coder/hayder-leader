function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <section className="rounded-[34px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
        <div className="animate-pulse">
          <div className="h-5 w-36 rounded-full bg-slate-200" />
          <div className="mt-4 h-12 w-3/4 rounded-full bg-slate-100" />
          <div className="mt-4 h-4 w-full rounded-full bg-slate-100" />
          <div className="mt-2 h-4 w-2/3 rounded-full bg-slate-100" />
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-12 rounded-2xl bg-slate-100" />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft">
            <div className="animate-pulse">
              <div className="h-4 w-24 rounded-full bg-slate-200" />
              <div className="mt-4 h-8 w-20 rounded-full bg-slate-100" />
              <div className="mt-4 h-3 w-full rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-[30px] border border-white/80 bg-white/95 p-6 shadow-soft">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-40 rounded-full bg-slate-200" />
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                <div className="h-4 w-24 rounded-full bg-slate-200" />
                <div className="mt-3 h-10 rounded-2xl bg-white" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoadingSkeleton;
