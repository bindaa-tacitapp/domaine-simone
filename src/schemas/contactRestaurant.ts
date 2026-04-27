import { z } from 'zod';

const contactRestaurantSchema = z.object({
  fullName: z.string().min(1),
  email: z.email().min(1),
  restaurantName: z.string().optional(),
  message: z.string().min(1),
});

type ContactRestaurantFormData = z.infer<typeof contactRestaurantSchema>;

export type { ContactRestaurantFormData };
export { contactRestaurantSchema };
