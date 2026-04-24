export const profileTabs = [
  {
    id: 'personal',
    label: 'المعلومات الشخصية',
    icon: 'ش',
    description: 'بيانات الهوية ووسائل التواصل الأساسية',
    accent: 'البيانات الأساسية',
  },
  {
    id: 'history',
    label: 'السجل الطبي',
    icon: 'س',
    description: 'الأمراض المزمنة والملاحظات الطبية الحساسة',
    accent: 'الخلاصة الطبية',
  },
  {
    id: 'consultations',
    label: 'الاستشارات',
    icon: 'ا',
    description: 'بطاقات زمنية لآخر الجلسات وملخصاتها',
    accent: 'الجلسات الأخيرة',
  },
  {
    id: 'medications',
    label: 'الأدوية',
    icon: 'د',
    description: 'جدول واضح للجرعات وحالة الالتزام',
    accent: 'الجرعات الحالية',
  },
  {
    id: 'settings',
    label: 'الإعدادات',
    icon: 'إ',
    description: 'اللغة والخصوصية وتفضيلات الإشعارات',
    accent: 'التفضيلات',
  },
];

export const profileHeaderData = {
  initials: 'هـأ',
  name: 'هيدر أحمد',
  subtitle: 'ملف صحي شخصي منظم وآمن مع تحديثات لحظية وسجل طبي واضح',
  completion: '88%',
  memberSince: 'منذ 2024',
  responseTime: 'تحديث فوري',
  trustBadges: ['تشفير السجل الطبي', 'مراجعة وصول الأجهزة', 'بيانات صحية موثوقة'],
  highlights: [
    { label: 'الحالة العامة', value: 'مستقرة', icon: 'ص' },
    { label: 'آخر زيارة', value: 'قبل 6 أيام', icon: 'ز' },
    { label: 'تنبيه مهم', value: 'حساسية دوائية', icon: '!' },
  ],
};

export const profileSummaryItems = [
  {
    label: 'فصيلة الدم',
    value: '+O',
    caption: 'معلومة مهمة يجب أن تبقى واضحة في أعلى الصفحة.',
    icon: 'ف',
    tone: 'brand',
  },
  {
    label: 'الطبيب المتابع',
    value: 'د. ريم السعدي',
    caption: 'المرجع الطبي الأساسي للحالة الحالية.',
    icon: 'ط',
    tone: 'cyan',
  },
  {
    label: 'الحساسية الأهم',
    value: 'البنسلين',
    caption: 'معلومة حرجة يتم إبرازها بصريًا بوضوح.',
    icon: 'ح',
    tone: 'rose',
  },
  {
    label: 'آخر قياس ضغط',
    value: '125/80',
    caption: 'آخر قراءة مسجلة ضمن السجل الشخصي.',
    icon: 'ق',
    tone: 'emerald',
  },
];

export const profileSections = {
  personal: {
    title: 'المعلومات الشخصية',
    description: 'بيانات أساسية منظمة لتسهيل التعرف على المستخدم والوصول لمعلوماته بسرعة.',
    items: [
      { id: 'full_name', label: 'الاسم الكامل', value: 'هيدر أحمد', icon: 'ش' },
      { id: 'birth_date', label: 'تاريخ الميلاد', value: '14/02/1996', icon: 'م' },
      { id: 'phone', label: 'رقم الهاتف', value: '+964 770 000 0000', icon: 'هـ' },
      { id: 'city', label: 'المدينة', value: 'بغداد', icon: 'ب' },
      { id: 'gender', label: 'الجنس', value: 'ذكر', icon: 'ج' },
      { id: 'emergency_contact', label: 'جهة اتصال طارئة', value: 'أحمد علي - 0770...', icon: 'ط' },
    ],
  },
  history: {
    title: 'السجل الطبي',
    description: 'أمراض مزمنة، تاريخ عائلي، وتنبيهات صحية مهمة مع أولوية للبيانات الأكثر حساسية.',
    items: [
      { id: 'chronic_conditions', label: 'أمراض مزمنة', value: 'ارتفاع ضغط الدم', icon: 'م' },
      { id: 'family_history', label: 'تاريخ عائلي', value: 'سكري من النوع الثاني', icon: 'ع' },
      { id: 'previous_surgeries', label: 'عمليات سابقة', value: 'لا يوجد', icon: 'ج' },
      { id: 'medical_notes', label: 'ملاحظات طبية', value: 'متابعة دورية كل 3 أشهر', icon: 'ن' },
    ],
  },
};

export const profileHealthSummary = {
  text: 'المستخدم يتابع حالته المزمنة بانتظام، والحالة العامة مستقرة حاليًا مع حساسية دوائية معروفة من البنسلين. يُنصح بالحفاظ على تحديث قائمة الأدوية والقياسات الدورية ورفع أي نتائج تحليل جديدة فور صدورها.',
  insights: [
    { label: 'درجة الاستقرار', value: 'جيدة' },
    { label: 'الالتزام بالعلاج', value: 'مرتفع' },
    { label: 'المعلومة الحرجة', value: 'حساسية من البنسلين' },
  ],
};

export const profileConsultations = [
  {
    id: 1,
    title: 'متابعة ضغط الدم',
    date: '24 أبريل 2026',
    doctor: 'د. ريم السعدي',
    description: 'تمت مراجعة قياسات الضغط المنزلية مع الإبقاء على الخطة الحالية.',
  },
  {
    id: 2,
    title: 'تفسير نتائج تحليل شامل',
    date: '10 أبريل 2026',
    doctor: 'د. سارة محمود',
    description: 'تم شرح النتائج وإضافة توصيات غذائية وخطة متابعة واضحة.',
  },
  {
    id: 3,
    title: 'استشارة أعراض صداع متكرر',
    date: '28 مارس 2026',
    doctor: 'د. محمد كريم',
    description: 'مراجعة نمط النوم وتقليل الإجهاد مع مراقبة شدة الأعراض أسبوعيًا.',
  },
];

export const profileMedications = [
  {
    id: 'med1',
    name: 'أملوديبين',
    schedule: 'مرة واحدة صباحًا',
    dose: '5mg',
    purpose: 'تنظيم ضغط الدم',
    updatedAt: 'قبل أسبوع',
    status: 'نشط',
  },
  {
    id: 'med2',
    name: 'فيتامين د',
    schedule: 'جرعة أسبوعية',
    dose: '5000 IU',
    purpose: 'دعم النقص المسجل',
    updatedAt: 'قبل 3 أيام',
    status: 'نشط',
  },
  {
    id: 'med3',
    name: 'مسكن عند الحاجة',
    schedule: 'عند اللزوم',
    dose: '500mg',
    purpose: 'تخفيف الصداع',
    updatedAt: 'اليوم',
    status: 'احتياطي',
  },
];

export const profileSettings = [
  {
    id: 'language',
    title: 'اللغة المفضلة',
    description: 'تحديد اللغة الأساسية للواجهة والإشعارات.',
    value: 'العربية',
    icon: 'ل',
  },
  {
    id: 'notifications',
    title: 'الإشعارات',
    description: 'استقبال تنبيهات الرسائل والمواعيد والاستشارات.',
    value: 'مفعلة بالكامل',
    icon: 'ج',
  },
  {
    id: 'privacy',
    title: 'الخصوصية',
    description: 'مشاركة السجل الصحي حسب الطبيب والصلاحية فقط.',
    value: 'مشاركة محددة',
    icon: 'خ',
  },
  {
    id: 'security',
    title: 'الأمان',
    description: 'حماية الحساب بالمصادقة الثنائية والأجهزة الموثقة.',
    value: 'تحقق بخطوتين مفعل',
    icon: 'أ',
  },
];
