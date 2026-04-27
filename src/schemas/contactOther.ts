import { z } from 'zod';

const contactOtherSchema = z.object({
  fullName: z.string().min(1),
  email: z.email().min(1),
  message: z.string().min(1),
});

type ContactOtherFormData = z.infer<typeof contactOtherSchema>;

export type { ContactOtherFormData };
export { contactOtherSchema };
