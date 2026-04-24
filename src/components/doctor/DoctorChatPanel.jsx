import { useEffect, useRef, useState } from 'react';

const initialMessages = [
  {
    id: 'm1',
    sender: 'patient',
    text: 'دكتور، ما زال عندي ألم خفيف في الصدر عند الحركة السريعة.',
    time: '09:15',
  },
  {
    id: 'm2',
    sender: 'doctor',
    text: 'هل الألم يزداد مع التنفس أو يرافقه ضيق واضح؟ أرسل أيضًا آخر قراءة للضغط إن أمكن.',
    time: '09:17',
  },
];

function DoctorChatPanel({ suggestions }) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  const sendReply = (value) => {
    const text = value.trim();
    if (!text) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        sender: 'doctor',
        text,
        time: new Intl.DateTimeFormat('ar', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date()),
      },
    ]);
    setInputValue('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          sender: 'patient',
          text: 'تم، سأرسل القراءة والملف الآن. شكرًا دكتور.',
          time: new Intl.DateTimeFormat('ar', {
            hour: '2-digit',
            minute: '2-digit',
          }).format(new Date()),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
      <div className="overflow-hidden rounded-[30px] border border-medical-border bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
          <div>
            <h3 className="text-base font-bold text-slate-950">محادثة مباشرة مع المريض</h3>
            <p className="mt-1 text-xs text-medical-muted">رسائل سريعة لتسريع القرار والمتابعة</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            متصل الآن
          </span>
        </div>

        <div ref={containerRef} className="flex h-[420px] flex-col gap-3 overflow-y-auto bg-slate-50/70 px-4 py-5 sm:px-5">
          {messages.map((message) => (
            <article
              key={message.id}
              className={[
                'max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-7 shadow-sm',
                message.sender === 'doctor'
                  ? 'self-start rounded-br-md bg-brand-600 text-white'
                  : 'self-end rounded-bl-md border border-slate-100 bg-white text-slate-900',
              ].join(' ')}
            >
              <p>{message.text}</p>
              <p className={['mt-2 text-[11px]', message.sender === 'doctor' ? 'text-white/80' : 'text-medical-muted'].join(' ')}>
                {message.time}
              </p>
            </article>
          ))}

          {isTyping ? (
            <div className="self-end rounded-[22px] rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs text-medical-muted">المريض يكتب الآن</span>
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-600" />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-slate-100 px-4 py-4 sm:px-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendReply(suggestion)}
                className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="mb-3">
            <label className="flex cursor-pointer items-center justify-between rounded-[20px] border border-dashed border-brand-200 bg-medical-soft/50 px-4 py-3 text-sm text-slate-700">
              <span>رفع ملف أو صورة للمراجعة</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">اختيار ملف</span>
              <input
                type="file"
                className="hidden"
                onChange={(event) => {
                  const fileList = Array.from(event.target.files || []);
                  setUploadedFiles(fileList.map((file) => file.name));
                }}
              />
            </label>
            {uploadedFiles.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {uploadedFiles.map((file) => (
                  <span
                    key={file}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {file}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <form
            className="flex items-end gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendReply(inputValue);
            }}
          >
            <textarea
              rows={2}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="اكتب الرد للمريض هنا..."
              className="max-h-32 min-h-[60px] w-full resize-none border-0 bg-transparent text-sm leading-7 text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft">
          <h3 className="text-base font-bold text-slate-950">ملخص سريع للحالة</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-medical-muted">
            <li>ألم صدري خفيف مع المجهود منذ يومين.</li>
            <li>لا توجد شكوى من إغماء أو ضيق تنفس شديد حتى الآن.</li>
            <li>المريض وعد بإرسال آخر قراءة ضغط وملف التحليل.</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-soft">
          <h3 className="text-base font-bold text-slate-950">إجراء سريع</h3>
          <div className="mt-4 space-y-3">
            {['طلب تخطيط قلب', 'تحويل للاستقبال', 'إغلاق المحادثة'].map((action) => (
              <button
                key={action}
                type="button"
                className="w-full rounded-2xl bg-medical-soft/70 px-4 py-3 text-right text-sm font-semibold text-slate-800 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorChatPanel;
