function AdminDataTable({ title, description, columns, rows, rowKey, emptyText, renderActions }) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-medical-muted">{description}</p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          {rows.length} سجل
        </span>
      </div>

      {rows.length ? (
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 pb-2 text-right text-xs font-semibold tracking-wide text-medical-muted"
                  >
                    {column.label}
                  </th>
                ))}
                <th className="px-4 pb-2 text-right text-xs font-semibold tracking-wide text-medical-muted">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[rowKey]}>
                  {columns.map((column) => (
                    <td key={column.key} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-800">
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </td>
                  ))}
                  <td className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="flex flex-wrap gap-2">{renderActions(row)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-5 rounded-[24px] border border-dashed border-brand-200 bg-brand-50/40 p-5 text-sm leading-7 text-medical-muted">
          {emptyText}
        </div>
      )}
    </section>
  );
}

export default AdminDataTable;
