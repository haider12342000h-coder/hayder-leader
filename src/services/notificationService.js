import { notificationsData } from '../data/notificationsData';
import { simulateApiResponse } from '../utils/api';

export async function fetchNotifications() {
  return simulateApiResponse(notificationsData, {
    delay: 380,
  });
}
