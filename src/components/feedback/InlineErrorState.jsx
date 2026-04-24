function InlineErrorState({ title, message, onRetry, compact = false }) {
  return (
    <section
      className={[
        'rounded-[28px] border border-rose-200 bg-rose-50/90 shadow-soft',
        compact ? 'p-4' : 'p-6',
      ].join(' ')}
      role="alert"
    >
      <h3 className="text-base font-bold text-rose-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-rose-800">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-full bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          إعادة المحاولة
        </button>
      ) : null}
    </section>
  );
}

export default InlineErrorState;
