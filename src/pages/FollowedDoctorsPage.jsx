import { useMemo, useState } from 'react';
import DashboardSection from '../components/dashboard/DashboardSection';
import OverviewHero from '../components/dashboard/OverviewHero';
import StatsGrid from '../components/dashboard/StatsGrid';
import BookingConfirmationModal from '../components/booking/BookingConfirmationModal';
import BookingDoctorCard from '../components/booking/BookingDoctorCard';
import CalendarGrid from '../components/booking/CalendarGrid';
import DoctorAvailabilityManager from '../components/booking/DoctorAvailabilityManager';
import TimeSlotsPanel from '../components/booking/TimeSlotsPanel';
import {
  bookingCalendarDays,
  bookingDoctors,
  bookingStats,
  doctorBookingRequests,
  doctorWorkingHours,
} from '../data/bookingSystemData';

function FollowedDoctorsPage() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(bookingDoctors[0].id);
  const [selectedDayId, setSelectedDayId] = useState(bookingCalendarDays[0].id);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workingHours, setWorkingHours] = useState(doctorWorkingHours);
  const [bookingRequests, setBookingRequests] = useState(doctorBookingRequests);

  const selectedDoctor = bookingDoctors.find((doctor) => doctor.id === selectedDoctorId) ?? bookingDoctors[0];
  const selectedDay = bookingCalendarDays.find((day) => day.id === selectedDayId) ?? bookingCalendarDays[0];
  const selectedSlot = selectedDay?.slots.find((slot) => slot.id === selectedSlotId) ?? null;

  const bookingSummary = useMemo(() => {
    if (!selectedDoctor || !selectedDay || !selectedSlot) {
      return null;
    }

    return {
      doctor: selectedDoctor.name,
      day: selectedDay.dayName,
      date: selectedDay.dateLabel,
      time: selectedSlot.label,
    };
  }, [selectedDoctor, selectedDay, selectedSlot]);

  return (
    <div className="space-y-6">
      <OverviewHero
        badge="نظام الحجز"
        title="حجز موعد طبي بخطوات بسيطة وسريعة"
        description="رحلة الحجز هنا لا تتجاوز ثلاث خطوات: اختيار الطبيب واليوم، اختيار الوقت، ثم تأكيد الموعد. كما توجد لوحة مصغرة للطبيب لتحديد ساعات العمل وقبول أو رفض الطلبات."
        actions={['ابدأ الحجز', 'إدارة الساعات']}
      />

      <StatsGrid items={bookingStats} />

      <DashboardSection
        title="اختيار الطبيب"
        description="بطاقات واضحة تبرز التخصص والتوفر وسرعة الرد حتى يعرف المستخدم من يمكنه الحجز معه بسرعة."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bookingDoctors.map((doctor) => (
            <BookingDoctorCard
              key={doctor.id}
              doctor={doctor}
              selected={doctor.id === selectedDoctorId}
              onSelect={(doctorId) => {
                setSelectedDoctorId(doctorId);
                setSelectedSlotId(null);
              }}
            />
          ))}
        </div>
      </DashboardSection>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <CalendarGrid
            days={bookingCalendarDays}
            selectedDayId={selectedDayId}
            onSelectDay={(dayId) => {
              setSelectedDayId(dayId);
              setSelectedSlotId(null);
            }}
          />

          <TimeSlotsPanel
            day={selectedDay}
            selectedSlotId={selectedSlotId}
            onSelectSlot={setSelectedSlotId}
          />
        </div>

        <DashboardSection
          title="ملخص الحجز"
          description="واجهة مختصرة توضح للمستخدم أين وصل في الرحلة وما الذي ينقصه قبل التأكيد."
        >
          <div className="space-y-4">
            {[
              ['الطبيب', selectedDoctor?.name ?? 'غير محدد'],
              ['اليوم', selectedDay?.dayName ?? 'غير محدد'],
              ['التاريخ', selectedDay?.dateLabel ?? 'غير محدد'],
              ['الوقت', selectedSlot?.label ?? 'اختر فترة زمنية'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-[22px] bg-medical-soft/60 px-4 py-3">
                <span className="text-sm text-medical-muted">{label}</span>
                <span className="text-sm font-semibold text-slate-900">{value}</span>
              </div>
            ))}

            <button
              type="button"
              disabled={!selectedSlot}
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Book Appointment
            </button>
          </div>
        </DashboardSection>
      </div>

      <DashboardSection
        title="لوحة الطبيب"
        description="جزء مخصص للطبيب لإدارة ساعات العمل واتخاذ قرار سريع بقبول أو رفض طلبات الحجز."
      >
        <DoctorAvailabilityManager
          workingHours={workingHours}
          bookingRequests={bookingRequests}
          onToggleDay={(day) =>
            setWorkingHours((current) =>
              current.map((item) => (item.day === day ? { ...item, active: !item.active } : item)),
            )
          }
          onDecision={(requestId, status) =>
            setBookingRequests((current) =>
              current.map((item) => (item.id === requestId ? { ...item, status } : item)),
            )
          }
        />
      </DashboardSection>

      <BookingConfirmationModal
        isOpen={isModalOpen}
        booking={bookingSummary}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          setBookingRequests((current) => [
            {
              id: crypto.randomUUID(),
              patient: 'المستخدم الحالي',
              day: `${selectedDay.dayName} ${selectedDay.dateLabel}`,
              time: selectedSlot.label,
              reason: `حجز جديد مع ${selectedDoctor.name}`,
              status: 'بانتظار القرار',
            },
            ...current,
          ]);
          setSelectedSlotId(null);
        }}
      />
    </div>
  );
}

export default FollowedDoctorsPage;
