function LoadingState({ title, rows = 3 }) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="animate-pulse">
        <div className="h-5 w-44 rounded-full bg-slate-200" />
        <div className="mt-3 h-4 w-72 max-w-full rounded-full bg-slate-100" />
        <h2 className="mt-5 text-sm font-semibold text-slate-700">{title}</h2>
        <div className="mt-4 space-y-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="rounded-[24px] border border-slate-100 p-4">
              <div className="h-4 w-32 rounded-full bg-slate-200" />
              <div className="mt-3 h-3 w-full rounded-full bg-slate-100" />
              <div className="mt-2 h-3 w-3/4 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoadingState;
