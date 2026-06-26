import { z } from 'zod';
import { CONTACT_TYPE } from '@/constants/routes';

const contactSchema = z.object({
  type: z.enum(['', ...Object.values(CONTACT_TYPE)]),
  fullName: z.string().min(1),
  email: z.email().min(1),
  message: z.string().min(1),
});

type ContactFormData = z.infer<typeof contactSchema>;

export type { ContactFormData };
export { contactSchema };
