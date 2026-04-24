import { useMemo, useState } from 'react';
import DashboardSection from '../components/dashboard/DashboardSection';
import EmptyState from '../components/dashboard/EmptyState';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import ConsultationChatPanel from '../components/consultation/ConsultationChatPanel';
import ConsultationFilters from '../components/consultation/ConsultationFilters';
import ConsultationSystemCard from '../components/consultation/ConsultationSystemCard';
import NewConsultationForm from '../components/consultation/NewConsultationForm';
import {
  consultationFilters,
  consultationSystemData,
  consultationSystemStats,
} from '../data/consultationSystemData';

function MyConsultationsPage() {
  const [consultations, setConsultations] = useState(consultationSystemData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [activeConsultationId, setActiveConsultationId] = useState(consultationSystemData[0]?.id ?? null);
  const [formData, setFormData] = useState({
    title: '',
    specialty: 'طب الأسرة',
    description: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const filteredConsultations = useMemo(() => {
    return consultations.filter((consultation) => {
      const matchesFilter = activeFilter === 'all' || consultation.status === activeFilter;
      const matchesSearch =
        consultation.title.includes(searchValue) ||
        consultation.doctor.includes(searchValue) ||
        consultation.specialty.includes(searchValue);

      return matchesFilter && matchesSearch;
    });
  }, [consultations, activeFilter, searchValue]);

  const activeConsultation =
    consultations.find((consultation) => consultation.id === activeConsultationId) ?? consultations[0];

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="نظام الاستشارات"
        title="إدارة الاستشارات والتنقل بينها بسهولة"
        description="واجهة عربية واضحة تعرض كل الاستشارات في بطاقات منظمة مع شارات حالة، بحث وتصفية، وإنشاء استشارة جديدة وفتح المحادثة مع الطبيب ورفع الملفات من نفس الصفحة."
        actions={['إنشاء استشارة', 'فتح آخر محادثة']}
      />

      <StatsGrid items={consultationSystemStats} />

      <NewConsultationForm
        formData={formData}
        onChange={(field, value) =>
          setFormData((current) => ({
            ...current,
            [field]: value,
          }))
        }
        uploadedFiles={uploadedFiles}
        onFileChange={(event) =>
          setUploadedFiles(Array.from(event.target.files || []).map((file) => file.name))
        }
        onSubmit={(event) => {
          event.preventDefault();

          if (!formData.title.trim() || !formData.description.trim()) {
            return;
          }

          const newConsultation = {
            id: crypto.randomUUID(),
            status: 'مفتوحة',
            updatedAt: 'تم إنشاؤها الآن',
            title: formData.title,
            summary: formData.description,
            doctor: 'سيتم التعيين قريبًا',
            specialty: formData.specialty,
            meta: [
              { label: 'تاريخ الإنشاء', value: 'اليوم' },
              { label: 'المرفقات', value: `${uploadedFiles.length} ملف` },
              { label: 'الأولوية', value: 'جديدة' },
            ],
            files: uploadedFiles,
            chat: [
              {
                id: crypto.randomUUID(),
                sender: 'user',
                text: formData.description,
                time: new Intl.DateTimeFormat('ar', {
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date()),
              },
            ],
          };

          setConsultations((current) => [newConsultation, ...current]);
          setActiveConsultationId(newConsultation.id);
          setFormData({
            title: '',
            specialty: 'طب الأسرة',
            description: '',
          });
          setUploadedFiles([]);
        }}
      />

      <ConsultationFilters
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={consultationFilters}
      />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <DashboardSection
          title="جميع الاستشارات"
          description="بطاقات الاستشارة تجمع الحالة، الطبيب، الملفات، وأهم الإجراءات في موضع واحد لتقليل عدد النقرات."
        >
          {filteredConsultations.length ? (
            <div className="grid gap-4">
              {filteredConsultations.map((consultation) => (
                <ConsultationSystemCard
                  key={consultation.id}
                  consultation={consultation}
                  isActive={consultation.id === activeConsultation?.id}
                  onOpenChat={() => setActiveConsultationId(consultation.id)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="لا توجد نتائج مطابقة"
              description="جرّب تغيير الفلتر أو مسح البحث للوصول إلى الاستشارات المتاحة بسرعة."
              actionLabel="عرض كل الاستشارات"
            />
          )}
        </DashboardSection>

        {activeConsultation ? (
          <ConsultationChatPanel
            consultation={activeConsultation}
            onUploadFiles={(consultationId, files) => {
              setConsultations((current) =>
                current.map((item) =>
                  item.id === consultationId
                    ? {
                        ...item,
                        files: [...item.files, ...files],
                        meta: item.meta.map((metaItem) =>
                          metaItem.label === 'المرفقات'
                            ? { ...metaItem, value: `${item.files.length + files.length} ملف` }
                            : metaItem,
                        ),
                      }
                    : item,
                ),
              );
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default MyConsultationsPage;
