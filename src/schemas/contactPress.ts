import { z } from 'zod';

const contactPressSchema = z.object({
  fullName: z.string().min(1),
  email: z.email().min(1),
  newspaperName: z.string().optional(),
  message: z.string().optional(),
});

type ContactPressFormData = z.infer<typeof contactPressSchema>;

export type { ContactPressFormData };
export { contactPressSchema };
