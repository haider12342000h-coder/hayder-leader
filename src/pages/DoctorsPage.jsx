import { useEffect, useMemo, useState } from 'react';
import DashboardSection from '../components/dashboard/DashboardSection';
import OverviewHero from '../components/dashboard/OverviewHero';
import DoctorAiAssistantPanel from '../components/doctor/DoctorAiAssistantPanel';
import DoctorChatPanel from '../components/doctor/DoctorChatPanel';
import DoctorConsultationsPanel from '../components/doctor/DoctorConsultationsPanel';
import DoctorDashboardSidebar from '../components/doctor/DoctorDashboardSidebar';
import DoctorOverviewCards from '../components/doctor/DoctorOverviewCards';
import DoctorProfilePanel from '../components/doctor/DoctorProfilePanel';
import DoctorReviewsPanel from '../components/doctor/DoctorReviewsPanel';
import DoctorSchedulePanel from '../components/doctor/DoctorSchedulePanel';
import {
  doctorAiSuggestions,
  doctorAvailability,
  doctorCaseSummary,
  doctorConsultations,
  doctorOverviewStats,
  doctorProfile,
  doctorReplySuggestions,
  doctorReviews,
  doctorSchedule,
  doctorSections,
} from '../data/doctorDashboardData';

function DoctorsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const visibleSection = useMemo(
    () => doctorSections.find((section) => section.id === activeSection) ?? doctorSections[0],
    [activeSection],
  );

  useEffect(() => {
    const target = document.getElementById(`doctor-section-${activeSection}`);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeSection]);

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="لوحة الطبيب"
        title="مساحة عمل متكاملة لإدارة المرضى والاستشارات بسرعة"
        description="تم تصميم هذه اللوحة للطبيب أولًا: نظرة عامة سريعة، قائمة استشارات واضحة، محادثة مباشرة، جدول مواعيد، تقييمات، ملف شخصي، ومساعد ذكي لتقليل الوقت بين القراءة والرد."
        actions={['فتح أول استشارة', 'تحديث التوفر']}
      />

      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <DoctorDashboardSidebar
          sections={doctorSections}
          activeSection={activeSection}
          onSelect={setActiveSection}
        />

        <div className="space-y-6">
          <DashboardSection
            title={visibleSection.label}
            description="كل قسم مرتب ليقدم للطبيب أقل عدد من الخطوات للوصول إلى القرار أو الإجراء التالي."
          >
            <div className="flex flex-wrap gap-2">
              {doctorSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    activeSection === section.id
                      ? 'bg-brand-600 text-white'
                      : 'bg-brand-50 text-brand-700 hover:bg-brand-100',
                  ].join(' ')}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </DashboardSection>

          <section id="doctor-section-overview" className="space-y-4">
            <DashboardSection
              title="نظرة عامة"
              description="مؤشرات سريعة تساعد الطبيب على فهم ضغط العمل الحالي وتحديد أولويات المتابعة."
            >
              <DoctorOverviewCards stats={doctorOverviewStats} />
            </DashboardSection>
          </section>

          <section id="doctor-section-consultations" className="space-y-4">
            <DashboardSection
              title="الاستشارات"
              description="قائمة عملية للحالات الجديدة وتلك قيد المعالجة أو المنتهية مع إبراز الحالة والأولوية بوضوح."
            >
              <DoctorConsultationsPanel consultations={doctorConsultations} />
            </DashboardSection>
          </section>

          <section id="doctor-section-chat" className="space-y-4">
            <DashboardSection
              title="نظام المحادثة"
              description="واجهة ردود سريعة ورفع ملفات لتسريع التواصل مع المريض وتقليل الوقت الضائع في التنقل."
            >
              <DoctorChatPanel suggestions={doctorReplySuggestions} />
            </DashboardSection>
          </section>

          <section id="doctor-section-schedule" className="space-y-4">
            <DashboardSection
              title="الجدول والتوفر"
              description="عرض منظم للمواعيد الحالية مع إمكان تحديد الفترات المتاحة لتجنب التعارض وتحسين الاستجابة."
            >
              <DoctorSchedulePanel schedule={doctorSchedule} availability={doctorAvailability} />
            </DashboardSection>
          </section>

          <section id="doctor-section-reviews" className="space-y-4">
            <DashboardSection
              title="تقييمات المرضى"
              description="قراءة سريعة لانطباعات المرضى الأكثر تأثيرًا على جودة الخدمة ووضوح التواصل."
            >
              <DoctorReviewsPanel reviews={doctorReviews} />
            </DashboardSection>
          </section>

          <section id="doctor-section-profile" className="space-y-4">
            <DashboardSection
              title="الملف الشخصي"
              description="عرض معلومات الطبيب المهنية والتشغيلية بشكل واضح مع نقطة دخول مباشرة للتعديل."
            >
              <DoctorProfilePanel profile={doctorProfile} />
            </DashboardSection>
          </section>

          <section id="doctor-section-assistant" className="space-y-4">
            <DashboardSection
              title="المساعد الذكي"
              description="اقتراحات جاهزة للرد وتلخيص سريع للحالة لتسريع القرار والمحافظة على اتساق التواصل."
            >
              <DoctorAiAssistantPanel
                suggestions={doctorAiSuggestions}
                summaryPoints={doctorCaseSummary}
              />
            </DashboardSection>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
