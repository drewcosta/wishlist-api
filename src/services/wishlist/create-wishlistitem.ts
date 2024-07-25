import { ZodError } from "zod";
import { HttpStatusError, ValidationError } from "../../error";
import { IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";
import { wishlistItemSchema, WishlistItemInput } from "../../schemas/wishlist/wishlistitemSchema";

export async function createWishlistItem(inputItem: WishlistItemInput): Promise<IWishlistItem> {
  try {
    wishlistItemSchema.parse(inputItem);
    const newItem = await wishlistRepository.createItem(inputItem);

    return newItem;
  } catch (error) {
    if (error instanceof ZodError) {
      const flattenedErrors = error.flatten();
      throw new ValidationError("Dados inválidos para cadastro", 400, flattenedErrors);
    }
    throw error;
  }
}
