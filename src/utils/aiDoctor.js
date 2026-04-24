const seriousKeywords = ['ضيق تنفس', 'ألم صدر', 'فقدان الوعي', 'تشنج', 'نزيف', 'شلل', 'اختناق'];
const feverKeywords = ['حرارة', 'حمى', 'سخونة'];
const headacheKeywords = ['صداع', 'دوخة', 'شقيقة'];
const stomachKeywords = ['معدة', 'بطن', 'غثيان', 'استفراغ', 'إسهال'];
const chestKeywords = ['سعال', 'كحة', 'بلغم', 'حلق', 'تنفس'];

export function getCurrentTime() {
  return new Intl.DateTimeFormat('ar', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());
}

function hasKeyword(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

export function buildAiDoctorReply(input) {
  const normalized = input.trim().toLowerCase();
  const isSerious = hasKeyword(normalized, seriousKeywords);
  const hasFever = hasKeyword(normalized, feverKeywords);
  const hasHeadache = hasKeyword(normalized, headacheKeywords);
  const hasStomach = hasKeyword(normalized, stomachKeywords);
  const hasChest = hasKeyword(normalized, chestKeywords);

  let conditions = ['إجهاد عام', 'حالة تحتاج متابعة سريرية'];
  let advice =
    'راقب الأعراض خلال الساعات القادمة، اشرب كمية كافية من الماء، ودوّن أي تغيّر في الشدة أو ظهور أعراض جديدة.';
  let warning = 'إذا استمرت الأعراض أو ساءت، احجز موعدًا مع طبيب خلال أقرب وقت مناسب.';
  let severity = 'medium';

  if (hasHeadache && hasFever) {
    conditions = ['عدوى فيروسية بسيطة', 'التهاب علوي بالجهاز التنفسي', 'جفاف أو إرهاق'];
    advice =
      'احرص على الراحة، الإكثار من السوائل، وقياس الحرارة بانتظام. إذا استمرت الحرارة أكثر من 48 ساعة فاستشر طبيبًا.';
  } else if (hasStomach) {
    conditions = ['التهاب معدة أو أمعاء', 'تسمم غذائي خفيف', 'تهيج هضمي'];
    advice =
      'ابدأ بسوائل خفيفة وأطعمة بسيطة، وتجنب الأطعمة الدسمة. راقب علامات الجفاف مثل قلة التبول أو الدوخة الشديدة.';
  } else if (hasChest) {
    conditions = ['التهاب تنفسي علوي', 'تحسس أو تهيج بالشعب الهوائية', 'نزلة برد'];
    advice =
      'راقب السعال والحرارة والتنفس. إذا كان السعال شديدًا أو ترافق مع صفير أو ألم واضح ففكّر بمراجعة طبيب صدرية أو باطنية.';
  }

  if (isSerious) {
    conditions = ['حالة طارئة محتملة', 'ضرورة تقييم فوري', 'أعراض عالية الخطورة'];
    advice =
      'لا تعتمد على التقييم الرقمي وحده. حاول التوجه إلى الطوارئ أو التواصل مع خدمة إسعاف أو طبيب بشكل عاجل.';
    warning = 'تحذير: الأعراض المذكورة قد تكون خطيرة وتحتاج تقييمًا طبيًا فوريًا.';
    severity = 'high';
  }

  const text = `بناءً على الأعراض المكتوبة، هذه قراءة أولية وليست تشخيصًا نهائيًا. أرفقت لك الحالات المحتملة والنصيحة الأنسب كبداية.`;

  return { text, conditions, advice, warning, severity };
}

export function createConsultationSummary(userText, reply, messages) {
  return {
    id: crypto.randomUUID(),
    title: userText.slice(0, 22) + (userText.length > 22 ? '...' : ''),
    preview: reply.warning,
    conditions: reply.conditions.slice(0, 2),
    time: getCurrentTime(),
    messages,
  };
}
