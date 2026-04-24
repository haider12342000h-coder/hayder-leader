import { Outlet, useLocation } from 'react-router-dom';
import AppSidebar from '../components/navigation/AppSidebar';
import Navbar from '../components/navigation/Navbar';

function AppLayout() {
  const location = useLocation();
  const showSidebar = ['/admin', '/doctors', '/ai-doctor'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-medical-bg text-medical-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-80 bg-gradient-to-b from-brand-100 via-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-16 -z-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="grid flex-1 gap-6 py-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          {showSidebar ? <AppSidebar /> : null}
          <main className="page-enter min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
