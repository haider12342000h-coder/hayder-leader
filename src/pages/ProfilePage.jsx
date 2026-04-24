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

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[34px] border border-white/80 bg-white/95 p-6 shadow-soft backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
              الملف الشخصي
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              تخطيط أوضح وأسهل للملف الطبي
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-medical-muted sm:text-base">
              تمت إعادة ترتيب الصفحة لتكون أكثر هدوءًا واتزانًا: معلومات مهمة أولًا، عمود جانبي
              ثابت للتنبيهات، ومنطقة رئيسية مخصصة للتبويب الحالي فقط.
            </p>
          </div>

          <div className="rounded-[24px] border border-brand-100 bg-brand-50/70 px-5 py-4 text-sm leading-7 text-brand-800">
            قراءة أسهل للمستخدم العربي
            <br />
            تركيز أعلى على الثقة والوضوح
          </div>
        </div>
      </section>

      <ProfileHeaderCard
        profile={profileHeaderData}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing((current) => !current)}
      />

      <ProfileSummaryStrip items={profileSummaryItems} />

      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <ProfileSidebarCard
          healthSummary={profileHealthSummary}
          alerts={[
            'حساسية دوائية مؤكدة: البنسلين',
            'يلزم متابعة ضغط الدم كل 3 أيام',
          ]}
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
                setSettings((current) =>
                  current.map((item) => (item.id === id ? { ...item, value } : item)),
                )
              }
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
