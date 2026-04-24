function DoctorReviewsPanel({ reviews }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {reviews.map((review) => (
        <article
          key={review.id}
          className="rounded-[28px] border border-medical-border bg-white p-5 shadow-soft"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-950">{review.patient}</h3>
              <p className="mt-1 text-xs text-medical-muted">{review.date}</p>
            </div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              {review.rating}
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-medical-muted">{review.comment}</p>
        </article>
      ))}
    </div>
  );
}

export default DoctorReviewsPanel;
