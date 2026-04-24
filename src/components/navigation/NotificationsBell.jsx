import { useEffect, useMemo, useState } from 'react';
import InlineErrorState from '../feedback/InlineErrorState';
import useApiRequest from '../../hooks/useApiRequest';
import { fetchNotifications } from '../../services/notificationService';

const notificationStyles = {
  message: {
    icon: 'ر',
    badge: 'رسالة جديدة',
    color: 'bg-sky-100 text-sky-800',
  },
  appointment: {
    icon: 'م',
    badge: 'تذكير موعد',
    color: 'bg-amber-100 text-amber-800',
  },
  reply: {
    icon: 'ط',
    badge: 'رد الطبيب',
    color: 'bg-emerald-100 text-emerald-800',
  },
};

function NotificationsBell() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading, execute, setData } = useApiRequest(fetchNotifications);
  const notifications = data ?? [];

  useEffect(() => {
    execute().catch(() => null);
  }, [execute]);

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.read).length,
    [notifications],
  );

  const markAllAsRead = () => {
    setData((current) => current.map((item) => ({ ...item, read: true })));
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-100 bg-white text-slate-800 shadow-soft transition hover:scale-[1.02] hover:bg-brand-50"
        aria-label="الإشعارات"
      >
        <span className="text-lg">🔔</span>
        {unreadCount ? (
          <span className="absolute -left-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white">
            {unreadCount}
          </span>
        ) : null}
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-[calc(100%+12px)] z-30 w-[360px] max-w-[90vw] rounded-[28px] border border-white/80 bg-white/95 p-4 shadow-soft backdrop-blur-xl transition-all duration-200">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-950">الإشعارات</h3>
              <p className="mt-1 text-xs text-medical-muted">رسائل وتنبيهات ومتابعات طبية</p>
            </div>
            <button
              type="button"
              onClick={markAllAsRead}
              disabled={!notifications.length}
              className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              تعيين الكل كمقروء
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-[22px] border border-slate-100 bg-slate-50 p-4">
                  <div className="animate-pulse">
                    <div className="h-4 w-28 rounded-full bg-slate-200" />
                    <div className="mt-3 h-3 w-full rounded-full bg-slate-100" />
                    <div className="mt-2 h-3 w-4/5 rounded-full bg-slate-100" />
                  </div>
                </div>
              ))
            ) : null}

            {error ? (
              <InlineErrorState
                compact
                title="تعذر تحميل الإشعارات"
                message={error.message}
                onRetry={() => execute().catch(() => null)}
              />
            ) : null}

            {!isLoading && !error
              ? notifications.map((notification) => {
                  const style = notificationStyles[notification.type];

                  return (
                    <article
                      key={notification.id}
                      className={[
                        'rounded-[22px] border p-4 transition',
                        notification.read
                          ? 'border-slate-100 bg-slate-50/70'
                          : 'border-brand-100 bg-brand-50/50',
                      ].join(' ')}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700 shadow-sm">
                          {style.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-950">{notification.title}</h4>
                            {!notification.read ? (
                              <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
                            ) : null}
                          </div>
                          <p className="mt-2 text-sm leading-7 text-medical-muted">{notification.description}</p>
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                            <span
                              className={[
                                'rounded-full px-3 py-1 text-[11px] font-semibold',
                                style.color,
                              ].join(' ')}
                            >
                              {style.badge}
                            </span>
                            <span className="text-[11px] text-medical-muted">{notification.time}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NotificationsBell;
