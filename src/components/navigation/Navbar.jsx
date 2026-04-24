import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/navItems';
import NotificationsBell from './NotificationsBell';

const linkClassName = ({ isActive }) =>
  [
    'group flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
    isActive
      ? 'bg-brand-600 text-white shadow-soft'
      : 'text-medical-muted hover:bg-brand-50 hover:text-brand-700',
  ].join(' ');

function Navbar() {
  return (
    <header className="sticky top-4 z-20 rounded-[32px] border border-white/80 bg-white/85 px-4 py-4 shadow-soft backdrop-blur-xl sm:px-6">
      <div className="flex flex-col gap-4 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand-700">المنصة الطبية الذكية</p>
            <h1 className="text-lg font-bold text-slate-950">لوحة الاستشارات الطبية</h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
            طب
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClassName}>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-xs font-bold transition group-hover:bg-brand-100/70 group-hover:text-brand-700">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NotificationsBell />

          <div className="flex items-center justify-between gap-3 rounded-[24px] border border-brand-100 bg-medical-soft px-4 py-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-900">صورة البروفايل</p>
              <p className="text-xs text-medical-muted">مستخدم نشط • آخر دخول قبل 10 دقائق</p>
              <button
                type="button"
                className="mt-1 text-xs font-medium text-rose-600 transition hover:text-rose-700"
              >
                تسجيل الخروج
              </button>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400 text-sm font-bold text-white shadow-soft">
              H
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
