import { useState } from 'react';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import AISummaryPanel from '../components/ai/AISummaryPanel';
import PreDiagnosisForm from '../components/ai/PreDiagnosisForm';
import RiskDetectionPanel from '../components/ai/RiskDetectionPanel';
import SmartRecommendationsPanel from '../components/ai/SmartRecommendationsPanel';
import { aiDoctorStats } from '../data/dashboardContent';
import {
  defaultPreDiagnosisState,
  defaultSymptomInput,
  preDiagnosisQuestions,
} from '../data/aiFeaturesData';
import { buildPreDiagnosisResult } from '../utils/aiProduct';

function AIDoctorPage() {
  const [formState, setFormState] = useState(defaultPreDiagnosisState);
  const [symptomText, setSymptomText] = useState(defaultSymptomInput);
  const [result, setResult] = useState(() =>
    buildPreDiagnosisResult(defaultPreDiagnosisState, defaultSymptomInput),
  );

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="الطبيب الذكي"
        title="واجهة AI طبية تركز على الوضوح والثقة والجدية"
        description="تم تصميم هذه التجربة لتشبه منتجًا طبيًا مسؤولًا: نموذج تقييم أولي واضح، ملخص قبل الإرسال للطبيب، كشف مبكر للمخاطر، وتوصيات ذكية تساعد المستخدم على فهم الخطوة التالية."
        actions={['بدء تقييم جديد', 'إرسال الملخص للطبيب']}
      />

      <StatsGrid items={aiDoctorStats} />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <PreDiagnosisForm
            questions={preDiagnosisQuestions}
            formState={formState}
            symptomText={symptomText}
            onQuestionChange={(id, value) =>
              setFormState((current) => ({
                ...current,
                [id]: value,
              }))
            }
            onSymptomChange={setSymptomText}
            onGenerate={() => setResult(buildPreDiagnosisResult(formState, symptomText))}
          />

          <AISummaryPanel summary={result.summary} />
        </div>

        <div className="space-y-6">
          <RiskDetectionPanel riskLevel={result.riskLevel} riskNotes={result.riskNotes} />
          <SmartRecommendationsPanel recommendations={result.recommendations} />
        </div>
      </div>
    </div>
  );
}

export default AIDoctorPage;
