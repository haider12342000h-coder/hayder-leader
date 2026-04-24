import { useEffect, useRef, useState } from 'react';

function ConsultationChatPanel({ consultation, onUploadFiles }) {
  const [messages, setMessages] = useState(consultation.chat);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [files, setFiles] = useState(consultation.files);
  const containerRef = useRef(null);

  useEffect(() => {
    setMessages(consultation.chat);
    setFiles(consultation.files);
  }, [consultation]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  const sendMessage = (value) => {
    const text = value.trim();
    if (!text) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        sender: 'user',
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
          sender: 'doctor',
          text: 'تمت مراجعة رسالتك، يرجى الاستمرار برفع الملفات المطلوبة وسأتابع معك فورًا.',
          time: new Intl.DateTimeFormat('ar', {
            hour: '2-digit',
            minute: '2-digit',
          }).format(new Date()),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section className="rounded-[30px] border border-white/80 bg-white/95 shadow-soft backdrop-blur-xl">
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950">محادثة الطبيب</h3>
            <p className="mt-1 text-sm text-medical-muted">
              {consultation.title} • {consultation.doctor}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
              {consultation.status}
            </span>
            <label className="cursor-pointer rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-50">
              رفع ملفات
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(event) => {
                  const selected = Array.from(event.target.files || []).map((file) => file.name);
                  setFiles((current) => [...current, ...selected]);
                  onUploadFiles(consultation.id, selected);
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex h-[430px] flex-col gap-3 overflow-y-auto bg-slate-50/70 px-4 py-5 sm:px-5">
        {messages.map((message) => (
          <article
            key={message.id}
            className={[
              'max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-7 shadow-sm',
              message.sender === 'user'
                ? 'self-start rounded-br-md bg-brand-600 text-white'
                : 'self-end rounded-bl-md border border-slate-100 bg-white text-slate-900',
            ].join(' ')}
          >
            <p>{message.text}</p>
            <p className={['mt-2 text-[11px]', message.sender === 'user' ? 'text-white/80' : 'text-medical-muted'].join(' ')}>
              {message.time}
            </p>
          </article>
        ))}

        {isTyping ? (
          <div className="self-end rounded-[22px] rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs text-medical-muted">الطبيب يكتب الآن</span>
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:-0.2s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.1s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-600" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-t border-slate-100 px-5 py-4">
        {files.length ? (
          <div className="mb-3 flex flex-wrap gap-2">
            {files.map((file) => (
              <span
                key={file}
                className="rounded-full bg-medical-soft px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {file}
              </span>
            ))}
          </div>
        ) : null}

        <form
          className="flex items-end gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-3"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(inputValue);
          }}
        >
          <textarea
            rows={2}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="اكتب رسالتك للطبيب هنا..."
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
    </section>
  );
}

export default ConsultationChatPanel;
