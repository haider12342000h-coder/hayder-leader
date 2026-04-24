export const profileTabs = [
  { id: 'personal', label: 'المعلومات الشخصية', icon: 'ش' },
  { id: 'history', label: 'التاريخ الطبي', icon: 'ت' },
  { id: 'medications', label: 'الأدوية', icon: 'د' },
  { id: 'allergies', label: 'الحساسيات', icon: 'ح' },
];

export const profileHeaderData = {
  initials: 'هـأ',
  name: 'هيدر أحمد',
  subtitle: 'ملف صحي شخصي مع متابعة نشطة وآخر تحديث اليوم',
  trustBadges: ['تشفير السجل الطبي', 'مشاركة حسب الصلاحية فقط'],
  highlights: [
    { label: 'درجة الأمان', value: 'مرتفعة', icon: 'أ' },
    { label: 'آخر مزامنة', value: 'قبل 4 دقائق', icon: 'م' },
    { label: 'الوصول الموثق', value: '3 أجهزة', icon: 'و' },
  ],
};

export const profileEditableSections = {
  personal: {
    title: 'المعلومات الشخصية',
    description: 'بيانات التعريف والاتصال الأساسية مع تصميم يركز على الوضوح والاطمئنان.',
    items: [
      { id: 'full_name', label: 'الاسم الكامل', value: 'هيدر أحمد', icon: 'ش' },
      { id: 'birth_date', label: 'تاريخ الميلاد', value: '14/02/1996', icon: 'م' },
      { id: 'phone', label: 'رقم الهاتف', value: '+964 770 000 0000', icon: 'ه' },
      { id: 'city', label: 'المدينة', value: 'بغداد', icon: 'ب' },
    ],
  },
  history: {
    title: 'التاريخ الطبي',
    description: 'ملخص منظم للأمراض المزمنة والإجراءات السابقة لتسهيل القراءة الطبية.',
    items: [
      { id: 'chronic_conditions', label: 'أمراض مزمنة', value: 'ارتفاع ضغط الدم', icon: 'م' },
      { id: 'previous_surgeries', label: 'عمليات سابقة', value: 'لا يوجد', icon: 'ج' },
      { id: 'last_checkup', label: 'آخر فحص', value: 'قبل 18 يومًا', icon: 'ف' },
      { id: 'family_history', label: 'تاريخ عائلي', value: 'سكري من النوع الثاني', icon: 'ع' },
    ],
  },
  medications: {
    title: 'الأدوية الحالية',
    description: 'قائمة الأدوية موضوعة في بطاقات واضحة لتفادي الالتباس في الجرعات.',
    items: [
      { id: 'med_1', label: 'دواء 1', value: 'أملوديبين 5mg صباحًا', icon: '1' },
      { id: 'med_2', label: 'دواء 2', value: 'فيتامين د أسبوعيًا', icon: '2' },
      { id: 'med_3', label: 'دواء 3', value: 'مسكن عند الحاجة', icon: '3' },
      { id: 'med_4', label: 'التزام الدواء', value: 'منتظم خلال آخر شهر', icon: '4' },
    ],
  },
  allergies: {
    title: 'الحساسيات والتنبيهات',
    description: 'إبراز الحساسيات بشكل واضح يساعد على إحساس أعلى بالأمان والثقة.',
    items: [
      { id: 'allergy_1', label: 'دوائية', value: 'البنسلين', icon: 'د' },
      { id: 'allergy_2', label: 'غذائية', value: 'لا يوجد', icon: 'غ' },
      { id: 'allergy_3', label: 'بيئية', value: 'غبار خفيف', icon: 'ب' },
      { id: 'allergy_4', label: 'تنبيه خاص', value: 'يلزم إعلام الطبيب قبل الوصفات الجديدة', icon: 'ت' },
    ],
  },
};

export const healthSummaryData = {
  summary:
    'المستخدم يحافظ على متابعة جيدة للحالة المزمنة مع استقرار نسبي في الأعراض خلال الأسابيع الأخيرة. توجد حساسية دوائية واضحة من البنسلين ويُنصح بالحفاظ على تحديث الأدوية وقياسات الضغط بشكل دوري.',
  insights: [
    { label: 'الحالة العامة', value: 'مستقرة' },
    { label: 'مؤشر المتابعة', value: 'منتظم' },
    { label: 'نقطة الانتباه', value: 'مراقبة الضغط' },
  ],
};

export const consultationTimelineData = [
  {
    id: 1,
    title: 'استشارة متابعة ضغط الدم',
    date: '24 أبريل 2026',
    doctor: 'د. ريم السعدي',
    description: 'تمت مراجعة القراءات المنزلية مع الإبقاء على نفس الخطة العلاجية.',
  },
  {
    id: 2,
    title: 'تفسير نتائج تحليل شامل',
    date: '10 أبريل 2026',
    doctor: 'د. سارة محمود',
    description: 'تم توضيح النتائج وتوصية بمتابعة غذائية وتحليل متابعة بعد 3 أشهر.',
  },
  {
    id: 3,
    title: 'استشارة أعراض صداع متكرر',
    date: '28 مارس 2026',
    doctor: 'د. محمد كريم',
    description: 'اقتراح متابعة نمط النوم وتقليل الإجهاد مع طلب مراقبة شدة الصداع أسبوعيًا.',
  },
];

export const symptomChartsData = [
  {
    title: 'شدة الصداع عبر الوقت',
    data: [
      { label: 'الأسبوع 1', value: 7 },
      { label: 'الأسبوع 2', value: 6 },
      { label: 'الأسبوع 3', value: 5 },
      { label: 'الأسبوع 4', value: 4 },
      { label: 'الأسبوع 5', value: 3 },
      { label: 'الأسبوع 6', value: 3 },
    ],
  },
  {
    title: 'تذبذب الطاقة اليومية',
    data: [
      { label: 'الأسبوع 1', value: 4 },
      { label: 'الأسبوع 2', value: 5 },
      { label: 'الأسبوع 3', value: 6 },
      { label: 'الأسبوع 4', value: 6 },
      { label: 'الأسبوع 5', value: 7 },
      { label: 'الأسبوع 6', value: 8 },
    ],
  },
];
