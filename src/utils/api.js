export class AppApiError extends Error {
  constructor(message, code = 'UNKNOWN') {
    super(message);
    this.name = 'AppApiError';
    this.code = code;
  }
}

export function normalizeAppError(error) {
  if (error instanceof AppApiError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppApiError(error.message, 'UNKNOWN');
  }

  return new AppApiError('Unknown error', 'UNKNOWN');
}

export function getArabicErrorMessage(error) {
  switch (error.code) {
    case 'NETWORK':
      return 'تعذر الاتصال بالخدمة حاليًا. تحقق من الشبكة ثم حاول مرة أخرى.';
    case 'SERVER':
      return 'حدثت مشكلة في الخادم أثناء تحميل البيانات. حاول لاحقًا.';
    default:
      return 'حدث خطأ غير متوقع أثناء تحميل البيانات. حاول مرة أخرى.';
  }
}

export async function simulateApiResponse(data, options = {}) {
  const { delay = 450, shouldFail = false, errorCode = 'NETWORK' } = options;

  await new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });

  if (shouldFail) {
    throw new AppApiError('Simulated API failure', errorCode);
  }

  return data;
}
