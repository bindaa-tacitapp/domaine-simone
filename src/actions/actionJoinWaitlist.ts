'use server';

import { Email } from '@/backend/modules/Email/Email';
import { ActionJoinWaitlistProps } from '@/types/actions';

const actionJoinWaitlist = async (props: ActionJoinWaitlistProps) => {
  return Email.mutations.sendEmailFromWaitlist(props);
};

export { actionJoinWaitlist };
