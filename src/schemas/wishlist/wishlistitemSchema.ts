import { z } from 'zod';

export const wishlistItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().nonnegative("Price must be a positive number")
});

export interface WishlistItemInput extends z.infer<typeof wishlistItemSchema> { }
