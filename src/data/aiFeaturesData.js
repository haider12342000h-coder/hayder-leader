export const preDiagnosisQuestions = [
  {
    id: 'duration',
    label: 'مدة الأعراض',
    icon: 'م',
    options: ['أقل من يوم', 'من يوم إلى 3 أيام', 'أكثر من 3 أيام', 'مزمنة'],
  },
  {
    id: 'severity',
    label: 'شدة الأعراض',
    icon: 'ش',
    options: ['خفيفة', 'متوسطة', 'شديدة', 'متقلبة'],
  },
  {
    id: 'temperature',
    label: 'هل توجد حرارة؟',
    icon: 'ح',
    options: ['لا', 'نعم بشكل خفيف', 'نعم فوق 38', 'غير متأكد'],
  },
  {
    id: 'breathing',
    label: 'هل يوجد ضيق تنفس؟',
    icon: 'ت',
    options: ['لا', 'أحيانًا', 'واضح', 'شديد'],
  },
];

export const defaultPreDiagnosisState = {
  duration: 'من يوم إلى 3 أيام',
  severity: 'متوسطة',
  temperature: 'نعم بشكل خفيف',
  breathing: 'لا',
};

export const defaultSymptomInput =
  'أشعر بصداع مع إرهاق وحرارة خفيفة منذ يومين، ويزداد التعب في المساء مع قلة الشهية.';
