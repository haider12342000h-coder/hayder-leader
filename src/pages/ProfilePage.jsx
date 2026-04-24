import { useEffect, useMemo, useState } from 'react';
import EmptyState from '../components/profile/EmptyState';
import LoadingSkeleton from '../components/profile/LoadingSkeleton';
import MedicationCards from '../components/profile/MedicationCards';
import ProfileHeaderCard from '../components/profile/ProfileHeaderCard';
import ProfileSectionCard from '../components/profile/ProfileSectionCard';
import ProfileSidebarCard from '../components/profile/ProfileSidebarCard';
import ProfileSummaryStrip from '../components/profile/ProfileSummaryStrip';
import ProfileTabs from '../components/profile/ProfileTabs';
import ConsultationsTabContent from '../components/profile/ConsultationsTabContent';
import SettingsCards from '../components/profile/SettingsCards';
import {
  profileConsultations,
  profileHeaderData,
  profileHealthSummary,
  profileMedications,
  profileSections,
  profileSettings,
  profileSummaryItems,
  profileTabs,
} from '../data/profilePageData';

function buildInitialFormState() {
  return Object.values(profileSections).reduce((accumulator, section) => {
    section.items.forEach((item) => {
      accumulator[item.id] = item.value;
    });
    return accumulator;
  }, {});
}

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState(buildInitialFormState);
  const [medications, setMedications] = useState(profileMedications);
  const [settings, setSettings] = useState(profileSettings);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 420);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const activeSection = useMemo(() => {
    if (!['personal', 'history'].includes(activeTab)) {
      return null;
    }

    const section = profileSections[activeTab];
    return {
      ...section,
      items: section.items.map((item) => ({
        ...item,
        value: formState[item.id],
      })),
    };
  }, [activeTab, formState]);

  const activeTabData = useMemo(
    () => profileTabs.find((tab) => tab.id === activeTab) ?? profileTabs[0],
    [activeTab],
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6">
      <section className="profile-glow overflow-hidden rounded-[36px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_320px] xl:items-end">
          <div>
            <span className="inline-flex rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-xs font-semibold text-brand-700">
              الملف الشخصي
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              تجربة أكثر وضوحًا لإدارة بياناتك الطبية ومتابعتها بسرعة
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-medical-muted sm:text-base">
              أعدنا تنظيم الملف ليبدأ بالمعلومات الأهم، يحتفظ بالتنبيهات الحساسة بشكل ثابت، ويعرض كل تبويب بطريقة
              أهدأ وأسهل في القراءة.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                اكتمال الملف {profileHeaderData.completion}
              </div>
              <div className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800">
                {activeTabData.accent}
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {isEditing ? 'وضع التحرير نشط' : 'وضع العرض'}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-slate-50/80 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-slate-900">نظرة سريعة</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-white px-4 py-3">
                <p className="text-xs font-semibold text-medical-muted">التبويب الحالي</p>
                <p className="mt-1 text-base font-bold text-slate-950">{activeTabData.label}</p>
                <p className="mt-2 text-sm leading-7 text-medical-muted">{activeTabData.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-2xl border border-white bg-white/80 px-4 py-3">
                  <p className="text-xs font-semibold text-medical-muted">آخر تحديث</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{profileHeaderData.responseTime}</p>
                </div>
                <div className="rounded-2xl border border-white bg-white/80 px-4 py-3">
                  <p className="text-xs font-semibold text-medical-muted">العضوية</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{profileHeaderData.memberSince}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfileHeaderCard
        profile={profileHeaderData}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing((current) => !current)}
      />

      <ProfileSummaryStrip items={profileSummaryItems} />

      <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
        <ProfileSidebarCard
          healthSummary={profileHealthSummary}
          alerts={['حساسية دوائية مؤكدة: البنسلين', 'يلزم متابعة ضغط الدم كل 3 أيام']}
        />

        <div className="min-w-0 space-y-6">
          <ProfileTabs tabs={profileTabs} activeTab={activeTab} onChange={setActiveTab} />

          {(activeTab === 'personal' || activeTab === 'history') && activeSection ? (
            <ProfileSectionCard
              title={activeSection.title}
              description={activeSection.description}
              items={activeSection.items}
              isEditing={isEditing}
              onFieldChange={(id, value) =>
                setFormState((current) => ({
                  ...current,
                  [id]: value,
                }))
              }
            />
          ) : null}

          {activeTab === 'consultations' ? (
            profileConsultations.length ? (
              <ConsultationsTabContent consultations={profileConsultations} />
            ) : (
              <EmptyState
                title="لا توجد استشارات حتى الآن"
                description="عندما تبدأ أول استشارة ستظهر هنا بترتيب واضح مع الطبيب والتاريخ والملخص."
                actionLabel="ابدأ استشارة"
              />
            )
          ) : null}

          {activeTab === 'medications' ? (
            medications.length ? (
              <MedicationCards
                medications={medications}
                isEditing={isEditing}
                onFieldChange={(id, field, value) =>
                  setMedications((current) =>
                    current.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
                  )
                }
              />
            ) : (
              <EmptyState
                title="لا توجد أدوية مسجلة"
                description="أضف الأدوية الحالية لتبقى الجرعات واضحة وسهلة الرجوع عند الحاجة."
                actionLabel="إضافة دواء"
              />
            )
          ) : null}

          {activeTab === 'settings' ? (
            <SettingsCards
              settings={settings}
              isEditing={isEditing}
              onFieldChange={(id, value) =>
                setSettings((current) => current.map((item) => (item.id === id ? { ...item, value } : item)))
              }
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
