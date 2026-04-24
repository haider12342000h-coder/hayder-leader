export const adminSections = [
  { id: 'users', label: 'إدارة المستخدمين', badge: '01' },
  { id: 'doctors', label: 'إدارة الأطباء', badge: '02' },
  { id: 'approvals', label: 'اعتماد الأطباء', badge: '03' },
  { id: 'consultations', label: 'الاستشارات', badge: '04' },
];

export const adminDashboardStats = [
  { label: 'المستخدمون', value: '1,240', caption: 'إجمالي الحسابات النشطة داخل النظام.', icon: 'م' },
  { label: 'الأطباء', value: '86', caption: 'أطباء موثقون أو بانتظار إدارة الحساب.', icon: 'ط' },
  { label: 'طلبات الاعتماد', value: '12', caption: 'طلبات تحتاج مراجعة أو موافقة.', icon: 'ا' },
  { label: 'الاستشارات اليوم', value: '47', caption: 'استشارات تم إنشاؤها أو تحديثها اليوم.', icon: 'س' },
];

export const adminFilters = [
  { id: 'all', label: 'الكل' },
  { id: 'active', label: 'نشط' },
  { id: 'pending', label: 'بانتظار المراجعة' },
  { id: 'flagged', label: 'بحاجة متابعة' },
];

export const adminUsers = [
  { id: 'u1', name: 'هيدر أحمد', email: 'haider@example.com', status: 'نشط', city: 'بغداد' },
  { id: 'u2', name: 'سارة علي', email: 'sara@example.com', status: 'بحاجة متابعة', city: 'البصرة' },
  { id: 'u3', name: 'أحمد كريم', email: 'ahmed@example.com', status: 'نشط', city: 'أربيل' },
];

export const adminDoctors = [
  { id: 'd1', name: 'د. ريم السعدي', specialty: 'طب الأسرة', status: 'نشط', response: '5 دقائق' },
  { id: 'd2', name: 'د. سارة محمود', specialty: 'الباطنية', status: 'نشط', response: '6 دقائق' },
  { id: 'd3', name: 'د. خالد سامي', specialty: 'القلبية', status: 'بانتظار المراجعة', response: 'غير مفعل' },
];

export const doctorApprovals = [
  { id: 'a1', name: 'د. خالد سامي', specialty: 'القلبية', documents: '4 ملفات', status: 'بانتظار المراجعة' },
  { id: 'a2', name: 'د. نور محمد', specialty: 'الأطفال', documents: '3 ملفات', status: 'بانتظار المراجعة' },
];

export const adminConsultations = [
  { id: 'c1', title: 'متابعة ضغط الدم', patient: 'هيدر أحمد', doctor: 'د. ريم السعدي', status: 'مفتوحة' },
  { id: 'c2', title: 'تفسير تحليل شامل', patient: 'مريم جاسم', doctor: 'د. سارة محمود', status: 'مغلقة' },
  { id: 'c3', title: 'استشارة جلدية', patient: 'سارة علي', doctor: 'د. ياسر هاشم', status: 'بانتظار الرد' },
];
