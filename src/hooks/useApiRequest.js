import { useCallback, useState } from 'react';
import { getArabicErrorMessage, normalizeAppError } from '../utils/api';

function useApiRequest(requestFn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await requestFn(...args);
        setData(response);
        return response;
      } catch (requestError) {
        const normalizedError = normalizeAppError(requestError);
        setError({
          ...normalizedError,
          message: getArabicErrorMessage(normalizedError),
        });
        throw normalizedError;
      } finally {
        setIsLoading(false);
      }
    },
    [requestFn],
  );

  return {
    data,
    error,
    isLoading,
    execute,
    setData,
    setError,
  };
}

export default useApiRequest;
