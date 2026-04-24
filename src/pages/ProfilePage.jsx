import { useMemo, useState } from 'react';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import ConsultationTimeline from '../components/profile/ConsultationTimeline';
import EditableInfoGrid from '../components/profile/EditableInfoGrid';
import HealthSummaryCard from '../components/profile/HealthSummaryCard';
import ProfileHeaderCard from '../components/profile/ProfileHeaderCard';
import ProfileTabs from '../components/profile/ProfileTabs';
import SymptomsChartCard from '../components/profile/SymptomsChartCard';
import { profileStats } from '../data/dashboardContent';
import {
  consultationTimelineData,
  healthSummaryData,
  profileEditableSections,
  profileHeaderData,
  profileTabs,
  symptomChartsData,
} from '../data/profilePageData';

function buildInitialFormState() {
  return Object.values(profileEditableSections).reduce((accumulator, section) => {
    section.items.forEach((item) => {
      accumulator[item.id] = item.value;
    });

    return accumulator;
  }, {});
}

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState(buildInitialFormState);

  const activeSection = useMemo(() => {
    const section = profileEditableSections[activeTab];

    return {
      ...section,
      items: section.items.map((item) => ({
        ...item,
        value: formState[item.id],
      })),
    };
  }, [activeTab, formState]);

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="الملف الشخصي الذكي"
        title="ملف صحي ذكي واضح وآمن وسهل التحديث"
        description="تم تحويل الملف الشخصي إلى تجربة أكثر نضجًا: تبويبات منظمة، بطاقات نظيفة، تلخيص صحي ذكي، خط زمني للاستشارات، ومخططات مبسطة لمتابعة الأعراض."
        actions={['تعديل الملف', 'تنزيل الملخص']}
      />

      <ProfileHeaderCard
        profile={profileHeaderData}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing((current) => !current)}
      />

      <StatsGrid items={profileStats} />

      <ProfileTabs tabs={profileTabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <EditableInfoGrid
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

          <ConsultationTimeline events={consultationTimelineData} />
        </div>

        <div className="space-y-6">
          <HealthSummaryCard
            summary={healthSummaryData.summary}
            insights={healthSummaryData.insights}
          />

          {symptomChartsData.map((chart) => (
            <SymptomsChartCard key={chart.title} title={chart.title} data={chart.data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
