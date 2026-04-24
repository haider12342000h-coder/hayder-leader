import ChatUI from '../components/dashboard/ChatUI';
import ConsultationCard from '../components/dashboard/ConsultationCard';
import DashboardSection from '../components/dashboard/DashboardSection';
import DoctorCard from '../components/dashboard/DoctorCard';
import EmptyState from '../components/dashboard/EmptyState';
import LoadingState from '../components/dashboard/LoadingState';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import { dashboardStats, doctors, recentConsultations } from '../data/dashboardContent';

function HomePage() {
  return (
    <div className="space-y-6">
      <OverviewHero
        badge="لوحة تحكم المستخدم"
        title="إدارة رحلتك الطبية من مكان واحد"
        description="تصميم عربي واضح يسهّل متابعة الاستشارات، الوصول للأطباء، وقراءة التنبيهات الصحية دون ازدحام بصري. تم تحسين المسافات، التباين، وتسلسل المعلومات لرفع قابلية القراءة في العربية."
        actions={['بدء استشارة جديدة', 'عرض الملف الشخصي']}
      />

      <StatsGrid items={dashboardStats} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <DashboardSection
          title="الاستشارات الحديثة"
          description="بطاقات مختصرة تعرض الحالة، الطبيب، وموعد آخر تحديث لتسهيل اتخاذ القرار بسرعة."
          actionLabel="عرض كل الاستشارات"
        >
          <div className="grid gap-4">
            {recentConsultations.map((consultation) => (
              <ConsultationCard key={consultation.id} consultation={consultation} />
            ))}
          </div>
        </DashboardSection>

        <DashboardSection
          title="المحادثة الطبية"
          description="نموذج لمحادثة بترتيب بصري مريح، مع تباين واضح وفقاعات رسائل سهلة التتبع."
          actionLabel="فتح المحادثة"
        >
          <ChatUI />
        </DashboardSection>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <DashboardSection
          title="الأطباء المقترحون"
          description="بطاقات تعتمد على الهرمية البصرية لإبراز التخصص، التقييم، وحالة التوفر."
          actionLabel="استعراض الأطباء"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {doctors.slice(0, 4).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </DashboardSection>

        <div className="grid gap-6">
          <EmptyState
            title="لا توجد فحوصات مرفوعة"
            description="استخدم حالة الفراغ لتوجيه المستخدم بوضوح بدل ترك مساحة صامتة. أضف زرًا واضحًا لرفع ملف أو طلب مساعدة."
            actionLabel="رفع نتيجة فحص"
          />
          <LoadingState title="جاري تحميل التوصيات الطبية" rows={3} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
