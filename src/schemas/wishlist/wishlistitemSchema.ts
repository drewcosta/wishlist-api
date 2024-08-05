import { z } from 'zod';

export const wishlistItemSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  price: z.number().nonnegative("Preço deve ser um número positivo")
});