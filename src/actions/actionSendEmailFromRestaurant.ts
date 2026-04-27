'use server';

import { Email } from '@/backend/modules/Email/Email';
import { ContactRestaurantFormData } from '@/schemas/contactRestaurant';

const actionSendEmailFromRestaurant = async (
  props: ContactRestaurantFormData,
) => {
  return Email.mutations.sendEmailFromRestaurant(props);
};

export { actionSendEmailFromRestaurant };
