import { useEffect, useRef, useState } from 'react';
import { buildAiDoctorReply, createConsultationSummary, getCurrentTime } from '../../utils/aiDoctor';

const STORAGE_KEY = 'ai-doctor-consultations';

const suggestionChips = ['صداع وحرارة', 'سعال وضيق تنفس', 'ألم بالصدر', 'نتيجة تحليل', 'ألم معدة'];

const initialMessages = [
  {
    id: crypto.randomUUID(),
    sender: 'assistant',
    text: 'مرحبًا بك. اكتب الأعراض التي تشعر بها بالعربية وسأعطيك احتمالات أولية ونصيحة عامة مع تنبيه إذا كانت الحالة مقلقة.',
    time: getCurrentTime(),
    meta: null,
  },
];

function ChatUI() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([]);
  const scrollRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        if (Array.isArray(parsed.history)) {
          setHistory(parsed.history);
        }

        if (Array.isArray(parsed.currentMessages) && parsed.currentMessages.length) {
          setMessages(parsed.currentMessages);
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentMessages: messages,
        history,
      }),
    );
  }, [history, messages]);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sendMessage = (text) => {
    const normalizedText = text.trim();

    if (!normalizedText || isTyping) {
      return;
    }

    const userMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: normalizedText,
      time: getCurrentTime(),
      meta: null,
    };

    setMessages((current) => [...current, userMessage]);
    setInputValue('');
    setIsTyping(true);

    timeoutRef.current = window.setTimeout(() => {
      const reply = buildAiDoctorReply(normalizedText);

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          sender: 'assistant',
          text: reply.text,
          time: getCurrentTime(),
          meta: reply,
        },
      ]);

      setIsTyping(false);
    }, 1100);
  };

  const startNewConsultation = () => {
    const userMessages = messages.filter((message) => message.sender === 'user');

    if (userMessages.length) {
      const lastUserMessage = userMessages[userMessages.length - 1];
      const lastAssistantMessage = [...messages]
        .reverse()
        .find((message) => message.sender === 'assistant' && message.meta);

      if (lastAssistantMessage?.meta) {
        setHistory((current) => [
          createConsultationSummary(lastUserMessage.text, lastAssistantMessage.meta, messages),
          ...current.slice(0, 7),
        ]);
      }
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsTyping(false);
    setInputValue('');
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: 'assistant',
        text: 'تم بدء استشارة جديدة. اذكر الأعراض الحالية ومدة ظهورها وأي عوامل تزيدها أو تخففها.',
        time: getCurrentTime(),
        meta: null,
      },
    ]);
  };

  const openHistoryConversation = (conversation) => {
    setMessages(conversation.messages);
    setInputValue('');
    setIsTyping(false);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-soft backdrop-blur-xl">
        <div className="border-b border-slate-100 bg-gradient-to-r from-brand-600 via-brand-600 to-cyan-500 px-5 py-4 text-white sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">الطبيب الذكي</p>
              <p className="mt-1 text-xs text-white/85">محادثة عربية منظمة بأسلوب قريب من تطبيقات الدردشة</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-medium">
                هذا النظام لا يغني عن الطبيب الحقيقي
              </span>
              <button
                type="button"
                onClick={startNewConsultation}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Start New Consultation
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex max-h-[620px] min-h-[620px] flex-col gap-3 overflow-y-auto bg-[linear-gradient(180deg,rgba(240,247,255,0.8),rgba(255,255,255,0.95))] px-4 py-5 sm:px-6"
        >
          {messages.map((message) => (
            <article
              key={message.id}
              className={[
                'max-w-[88%] rounded-[24px] px-4 py-3 shadow-sm sm:max-w-[80%]',
                message.sender === 'user'
                  ? 'self-start rounded-br-md bg-brand-600 text-white'
                  : 'self-end rounded-bl-md border border-slate-100 bg-white text-slate-900',
              ].join(' ')}
            >
              <p className="text-sm leading-7">{message.text}</p>

              {message.meta ? (
                <div className="mt-4 space-y-3 rounded-[18px] bg-slate-50 p-3 text-slate-800">
                  <div>
                    <p className="text-xs font-bold text-slate-950">الحالات المحتملة</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.meta.conditions.map((condition) => (
                        <span
                          key={condition}
                          className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-950">النصيحة</p>
                    <p className="mt-1 text-sm leading-7 text-medical-muted">{message.meta.advice}</p>
                  </div>

                  <div
                    className={[
                      'rounded-2xl px-3 py-2 text-xs font-semibold',
                      message.meta.severity === 'high'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-amber-100 text-amber-800',
                    ].join(' ')}
                  >
                    {message.meta.warning}
                  </div>
                </div>
              ) : null}

              <p
                className={[
                  'mt-3 text-[11px]',
                  message.sender === 'user' ? 'text-white/80' : 'text-medical-muted',
                ].join(' ')}
              >
                {message.time}
              </p>
            </article>
          ))}

          {isTyping ? (
            <div className="self-end rounded-[24px] rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-medical-muted">يكتب الآن</span>
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand-600" />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-slate-100 bg-white px-4 py-4 sm:px-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestionChips.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-full bg-medical-soft px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form
            className="flex items-end gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(inputValue);
            }}
          >
            <textarea
              rows={2}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="اكتب الأعراض بالتفصيل: متى بدأت؟ هل يوجد حرارة، ألم، سعال، ضيق تنفس أو دوخة؟"
              className="max-h-32 min-h-[64px] w-full resize-none border-0 bg-transparent text-sm leading-7 text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              إرسال
            </button>
          </form>
        </div>
      </section>

      <aside className="space-y-4">
        <section className="rounded-[32px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
          <h2 className="text-base font-bold text-slate-950">ملاحظات مهمة</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-medical-muted">
            <li>اذكر مدة الأعراض وشدتها وأي أدوية تستخدمها حاليًا.</li>
            <li>إذا ظهر ألم شديد بالصدر أو صعوبة تنفس فاطلب المساعدة الطبية فورًا.</li>
            <li>الردود هنا أولية وليست تشخيصًا نهائيًا.</li>
          </ul>
        </section>

        <section className="rounded-[32px] border border-white/80 bg-white/95 p-5 shadow-soft backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-950">سجل المحادثات</h2>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {history.length}
            </span>
          </div>

          {history.length ? (
            <div className="mt-4 space-y-3">
              {history.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openHistoryConversation(item)}
                  className="block w-full rounded-[24px] border border-medical-border bg-medical-soft/50 p-4 text-right transition hover:border-brand-200 hover:bg-brand-50/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <span className="text-[11px] text-medical-muted">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-medical-muted">{item.preview}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.conditions.map((condition) => (
                      <span
                        key={condition}
                        className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-700"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-[24px] border border-dashed border-brand-200 bg-brand-50/40 p-4 text-sm leading-7 text-medical-muted">
              لا توجد استشارات محفوظة بعد. ابدأ أول محادثة ليظهر السجل هنا تلقائيًا.
            </div>
          )}
        </section>

        <section className="rounded-[32px] border border-amber-200 bg-amber-50/80 p-5 shadow-soft">
          <p className="text-sm font-bold text-amber-900">تنبيه السلامة</p>
          <p className="mt-2 text-sm leading-7 text-amber-800">
            هذا النظام لا يغني عن الطبيب الحقيقي، خصوصًا في الحالات الطارئة أو الأعراض المتفاقمة بسرعة.
          </p>
        </section>
      </aside>
    </div>
  );
}

export default ChatUI;
