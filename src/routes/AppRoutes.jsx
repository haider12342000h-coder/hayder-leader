import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const MyConsultationsPage = lazy(() => import('../pages/MyConsultationsPage'));
const DoctorsPage = lazy(() => import('../pages/DoctorsPage'));
const AIDoctorPage = lazy(() => import('../pages/AIDoctorPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const FollowedDoctorsPage = lazy(() => import('../pages/FollowedDoctorsPage'));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/consultations" element={<MyConsultationsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/ai-doctor" element={<AIDoctorPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/followed-doctors" element={<FollowedDoctorsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
