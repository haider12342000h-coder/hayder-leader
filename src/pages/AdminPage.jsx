import { useEffect, useMemo, useState } from 'react';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import AdminDataTable from '../components/admin/AdminDataTable';
import AdminFilterBar from '../components/admin/AdminFilterBar';
import AdminSidebar from '../components/admin/AdminSidebar';
import {
  adminConsultations,
  adminDashboardStats,
  adminDoctors,
  adminFilters,
  adminSections,
  adminUsers,
  doctorApprovals,
} from '../data/adminDashboardData';

const statusBadgeClass = {
  نشط: 'bg-emerald-100 text-emerald-800',
  'بانتظار المراجعة': 'bg-amber-100 text-amber-800',
  'بحاجة متابعة': 'bg-rose-100 text-rose-800',
  مفتوحة: 'bg-sky-100 text-sky-800',
  مغلقة: 'bg-slate-200 text-slate-700',
  'بانتظار الرد': 'bg-amber-100 text-amber-800',
};

function renderStatus(value) {
  return (
    <span className={['rounded-full px-3 py-1 text-xs font-semibold', statusBadgeClass[value] || 'bg-slate-100 text-slate-700'].join(' ')}>
      {value}
    </span>
  );
}

function AdminPage() {
  const [activeSection, setActiveSection] = useState('users');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const target = document.getElementById(`admin-section-${activeSection}`);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeSection]);

  const filterRows = (rows, searchableKeys, statusKey = 'status') =>
    rows.filter((row) => {
      const matchesSearch = searchableKeys.some((key) =>
        String(row[key]).toLowerCase().includes(searchValue.toLowerCase()),
      );

      if (!matchesSearch) {
        return false;
      }

      if (activeFilter === 'all') {
        return true;
      }

      if (activeFilter === 'active') {
        return row[statusKey] === 'نشط';
      }

      if (activeFilter === 'pending') {
        return row[statusKey] === 'بانتظار المراجعة' || row[statusKey] === 'بانتظار الرد';
      }

      if (activeFilter === 'flagged') {
        return row[statusKey] === 'بحاجة متابعة';
      }

      return true;
    });

  const filteredUsers = useMemo(() => filterRows(adminUsers, ['name', 'email', 'city']), [activeFilter, searchValue]);
  const filteredDoctors = useMemo(() => filterRows(adminDoctors, ['name', 'specialty']), [activeFilter, searchValue]);
  const filteredApprovals = useMemo(() => filterRows(doctorApprovals, ['name', 'specialty']), [activeFilter, searchValue]);
  const filteredConsultations = useMemo(
    () => filterRows(adminConsultations, ['title', 'patient', 'doctor']),
    [activeFilter, searchValue],
  );

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="لوحة الادارة"
        title="لوحة تشغيل إدارية نظيفة وسريعة الوصول"
        description="واجهة عربية مرتبة للمشرف تتضمن جداول واضحة، فلاتر عملية، وإجراءات مباشرة لإدارة المستخدمين والأطباء واعتماد الحسابات ومتابعة الاستشارات."
        actions={['إضافة طبيب', 'تصدير تقرير']}
      />

      <StatsGrid items={adminDashboardStats} />

      <AdminFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={adminFilters}
      />

      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <AdminSidebar sections={adminSections} activeSection={activeSection} onSelect={setActiveSection} />

        <div className="space-y-6">
          <section id="admin-section-users">
            <AdminDataTable
              title="إدارة المستخدمين"
              description="جدول واضح لمراجعة المستخدمين والوصول السريع إلى التعديل أو الحذف."
              columns={[
                { key: 'name', label: 'الاسم' },
                { key: 'email', label: 'البريد' },
                { key: 'city', label: 'المدينة' },
                { key: 'status', label: 'الحالة', render: renderStatus },
              ]}
              rows={filteredUsers}
              rowKey="id"
              emptyText="لا توجد سجلات مستخدمين مطابقة للفلاتر الحالية."
              renderActions={() => (
                <>
                  <button type="button" className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700">
                    تعديل
                  </button>
                  <button type="button" className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-700">
                    حذف
                  </button>
                </>
              )}
            />
          </section>

          <section id="admin-section-doctors">
            <AdminDataTable
              title="إدارة الأطباء"
              description="عرض الأطباء الحاليين مع حالة الحساب وسرعة الرد وإجراءات الإدارة."
              columns={[
                { key: 'name', label: 'الاسم' },
                { key: 'specialty', label: 'التخصص' },
                { key: 'response', label: 'سرعة الرد' },
                { key: 'status', label: 'الحالة', render: renderStatus },
              ]}
              rows={filteredDoctors}
              rowKey="id"
              emptyText="لا توجد سجلات أطباء مطابقة للفلاتر الحالية."
              renderActions={() => (
                <>
                  <button type="button" className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700">
                    تعديل
                  </button>
                  <button type="button" className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-700">
                    حذف
                  </button>
                </>
              )}
            />
          </section>

          <section id="admin-section-approvals">
            <AdminDataTable
              title="اعتماد الأطباء"
              description="طلبات جديدة مع أزرار سريعة للموافقة أو الرفض وتقليل زمن المراجعة."
              columns={[
                { key: 'name', label: 'الاسم' },
                { key: 'specialty', label: 'التخصص' },
                { key: 'documents', label: 'الوثائق' },
                { key: 'status', label: 'الحالة', render: renderStatus },
              ]}
              rows={filteredApprovals}
              rowKey="id"
              emptyText="لا توجد طلبات اعتماد مطابقة للفلاتر الحالية."
              renderActions={() => (
                <>
                  <button type="button" className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700">
                    موافقة
                  </button>
                  <button type="button" className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-700">
                    رفض
                  </button>
                </>
              )}
            />
          </section>

          <section id="admin-section-consultations">
            <AdminDataTable
              title="عرض الاستشارات"
              description="متابعة مختصرة للاستشارات وحالتها الحالية وربطها بالمريض والطبيب."
              columns={[
                { key: 'title', label: 'الاستشارة' },
                { key: 'patient', label: 'المريض' },
                { key: 'doctor', label: 'الطبيب' },
                { key: 'status', label: 'الحالة', render: renderStatus },
              ]}
              rows={filteredConsultations}
              rowKey="id"
              emptyText="لا توجد استشارات مطابقة للفلاتر الحالية."
              renderActions={() => (
                <>
                  <button type="button" className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700">
                    تعديل
                  </button>
                  <button type="button" className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-700">
                    حذف
                  </button>
                </>
              )}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
