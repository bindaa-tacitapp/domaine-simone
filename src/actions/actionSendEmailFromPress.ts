'use server';

import { Email } from '@/backend/modules/Email/Email';
import { ContactPressFormData } from '@/schemas/contactPress';

const actionSendEmailFromPress = async (props: ContactPressFormData) => {
  return Email.mutations.sendEmailFromPress(props);
};

export { actionSendEmailFromPress };
