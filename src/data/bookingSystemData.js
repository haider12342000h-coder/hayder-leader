export const bookingStats = [
  { label: 'مواعيد هذا الأسبوع', value: '09', caption: 'جلسات متاحة أو مؤكدة خلال الأيام القادمة.', icon: 'م' },
  { label: 'أطباء متاحون', value: '03', caption: 'يمكن الحجز معهم مباشرة من التقويم.', icon: 'ط' },
  { label: 'طلبات جديدة', value: '04', caption: 'طلبات بانتظار قرار الطبيب.', icon: 'ج' },
  { label: 'متوسط مدة التأكيد', value: '6 د', caption: 'الوقت المعتاد لتأكيد الموعد بعد الطلب.', icon: 'ت' },
];

export const bookingDoctors = [
  {
    id: 'doctor-1',
    initials: 'رس',
    name: 'د. ريم السعدي',
    specialty: 'طب الأسرة',
    response: '5 دقائق',
    rating: '4.9',
    hours: '09:00 - 03:00',
    available: true,
  },
  {
    id: 'doctor-2',
    initials: 'سم',
    name: 'د. سارة محمود',
    specialty: 'الباطنية',
    response: '6 دقائق',
    rating: '4.8',
    hours: '10:00 - 02:00',
    available: true,
  },
  {
    id: 'doctor-3',
    initials: 'مح',
    name: 'د. محمد كريم',
    specialty: 'الأعصاب',
    response: '9 دقائق',
    rating: '4.7',
    hours: '12:00 - 05:00',
    available: true,
  },
];

export const bookingCalendarDays = [
  {
    id: 'day-1',
    dayName: 'الأحد',
    dateLabel: '27 أبريل 2026',
    available: true,
    slots: [
      { id: 's1', label: '09:00 ص', available: true },
      { id: 's2', label: '09:30 ص', available: false },
      { id: 's3', label: '10:00 ص', available: true },
      { id: 's4', label: '10:30 ص', available: true },
    ],
  },
  {
    id: 'day-2',
    dayName: 'الاثنين',
    dateLabel: '28 أبريل 2026',
    available: true,
    slots: [
      { id: 's5', label: '11:00 ص', available: true },
      { id: 's6', label: '11:30 ص', available: true },
      { id: 's7', label: '12:00 م', available: false },
      { id: 's8', label: '12:30 م', available: true },
    ],
  },
  {
    id: 'day-3',
    dayName: 'الثلاثاء',
    dateLabel: '29 أبريل 2026',
    available: true,
    slots: [
      { id: 's9', label: '01:00 م', available: true },
      { id: 's10', label: '01:30 م', available: true },
      { id: 's11', label: '02:00 م', available: true },
      { id: 's12', label: '02:30 م', available: false },
    ],
  },
  {
    id: 'day-4',
    dayName: 'الأربعاء',
    dateLabel: '30 أبريل 2026',
    available: true,
    slots: [
      { id: 's13', label: '09:00 ص', available: true },
      { id: 's14', label: '09:30 ص', available: true },
      { id: 's15', label: '10:00 ص', available: true },
      { id: 's16', label: '10:30 ص', available: true },
    ],
  },
];

export const doctorWorkingHours = [
  { day: 'الأحد', hours: '09:00 ص - 03:00 م', active: true },
  { day: 'الاثنين', hours: '10:00 ص - 02:00 م', active: true },
  { day: 'الثلاثاء', hours: '01:00 م - 05:00 م', active: true },
  { day: 'الأربعاء', hours: '09:00 ص - 12:00 م', active: false },
];

export const doctorBookingRequests = [
  {
    id: 'r1',
    patient: 'هبة علي',
    day: 'الأحد 27 أبريل',
    time: '10:00 ص',
    reason: 'متابعة ضغط الدم وقراءات الأسبوع الماضي.',
    status: 'بانتظار القرار',
  },
  {
    id: 'r2',
    patient: 'أحمد خالد',
    day: 'الاثنين 28 أبريل',
    time: '11:30 ص',
    reason: 'مراجعة تحليل شامل وشرح الخطة العلاجية.',
    status: 'بانتظار القرار',
  },
];
