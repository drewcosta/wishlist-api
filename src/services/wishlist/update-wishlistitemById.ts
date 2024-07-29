import { ZodError } from "zod";
import { HttpStatusError, ValidationError } from "../../error";
import { IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";
import { wishlistItemSchema } from "../../schemas";
import { updateItem } from "../../repositories/wishlist/update-wishlistitem";

export async function updateWishlistItemById(itemId: string, inputItem: IWishlistItem): Promise<IWishlistItem> {
  try {
    wishlistItemSchema.parse(inputItem);

    const currentItem = await wishlistRepository.findItemById(itemId);
    if (!currentItem) {
      throw new HttpStatusError("Item não encontrado!", 404);
    }

    const isEqualValues = Object.entries(inputItem).every(([key, value]) => {
      const currentValue = currentItem[key as keyof IWishlistItem];
      return value === currentValue;
    });

    if (isEqualValues) {
      throw new HttpStatusError("Não houve alteração nos campos!", 400);
    }

    const updatedItem = await wishlistRepository.updateItem(itemId, inputItem);
    if (!updatedItem) {
      throw new HttpStatusError("Falha ao retornar o item atualizado!", 500);
    }

    return updatedItem;
  } catch (error) {
    if (error instanceof ZodError) {
      const flattenedErrors = error.flatten();
      throw new ValidationError("Dados inválidos para atualização do item", 400, flattenedErrors);
    }
    throw error;
  }
}