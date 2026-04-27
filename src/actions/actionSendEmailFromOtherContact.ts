'use server';

import { Email } from '@/backend/modules/Email/Email';
import { ContactOtherFormData } from '@/schemas/contactOther';

const actionSendEmailFromOtherContact = async (props: ContactOtherFormData) => {
  return Email.mutations.sendEmailFromOtherContact(props);
};

export { actionSendEmailFromOtherContact };
