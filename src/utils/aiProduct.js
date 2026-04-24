export function buildPreDiagnosisResult(formState, symptomText) {
  const criticalBreathing = formState.breathing === 'شديد' || symptomText.includes('ألم صدر');
  const severeCase = formState.severity === 'شديدة' || formState.temperature === 'نعم فوق 38';

  const riskLevel = criticalBreathing ? 'critical' : 'warning';

  const summary = {
    text:
      'المستخدم يصف أعراضًا بدأت مؤخرًا مع تدرج متوسط في الشدة. تم جمع السياق الأساسي حول المدة والحرارة والتنفس لتسهيل فهم الحالة قبل إرسالها للطبيب. يوصى بمراجعة العلامات الحيوية الحالية واستكمال أي معلومات ناقصة عن التاريخ المرضي.',
    points: [
      { label: 'المدة', value: formState.duration },
      { label: 'الشدة', value: formState.severity },
      { label: 'التنفس', value: formState.breathing },
    ],
  };

  const riskNotes = criticalBreathing
    ? [
        'تم رصد مؤشر خطر مرتفع بسبب وجود ضيق تنفس شديد أو ألم صدري محتمل.',
        'يوصى بعدم الاكتفاء بالتقييم الرقمي والتوجه إلى الرعاية العاجلة إذا استمرت الأعراض.',
      ]
    : [
        severeCase
          ? 'الحالة تستحق مراجعة طبية سريعة بسبب ارتفاع الشدة أو الحرارة.'
          : 'لا توجد مؤشرات حمراء حاسمة حاليًا، لكن ينصح بالمتابعة القريبة.',
        'أي تدهور مفاجئ في التنفس أو الألم أو الوعي يجب اعتباره إشارة تصعيد.',
      ];

  const recommendations = [
    {
      title: 'الخطوة التالية',
      type: 'إجراء',
      description: 'أرسل هذا الملخص للطبيب مع ذكر أي أدوية مستخدمة حاليًا أو قياسات حديثة مثل الحرارة أو الضغط.',
    },
    {
      title: 'ما الذي يساعد الطبيب؟',
      type: 'معلومة',
      description: 'إرفاق مدة الأعراض بدقة، وما إذا كانت ثابتة أو متقطعة، يسرّع الوصول إلى قرار أوضح.',
    },
    {
      title: severeCase ? 'تنبيه متقدم' : 'متابعة آمنة',
      type: severeCase ? 'خطر' : 'متابعة',
      description: severeCase
        ? 'إذا استمرت الحرارة المرتفعة أو زادت الشدة بشكل ملحوظ، فالأفضل طلب تقييم مباشر.'
        : 'راقب تطور الأعراض خلال الساعات القادمة وسجل أي تغير مهم لعرضه على الطبيب.',
    },
  ];

  return { summary, riskLevel, riskNotes, recommendations };
}
