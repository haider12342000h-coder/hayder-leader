import { Suspense } from 'react';
import AppErrorBoundary from './components/feedback/AppErrorBoundary';
import PageSkeleton from './components/feedback/PageSkeleton';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<PageSkeleton />}>
        <AppRoutes />
      </Suspense>
    </AppErrorBoundary>
  );
}

export default App;
