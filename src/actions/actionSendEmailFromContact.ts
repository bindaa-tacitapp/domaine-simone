'use server';

import { Email } from '@/backend/modules/Email/Email';
import { ContactFormData } from '@/schemas/contact';

const actionSendEmailFromContact = async (props: ContactFormData) => {
  return Email.mutations.sendEmailFromContact(props);
};

export { actionSendEmailFromContact };
