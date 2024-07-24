import { ZodError } from "zod";
import { HttpStatusError, ValidationError } from "../../error";
import { IWishlistItem } from "../../interfaces";
import { IServiceResponse } from "../../interfaces/IServiceResponse";
import { wishlistRepository } from "../../repositories";
import { wishlistItemSchema, WishlistItemInput } from "../../schemas/wishlist/wishlistitemSchema";

export async function createWishlistItem(item: WishlistItemInput): Promise<IServiceResponse<IWishlistItem>> {
  try {
    wishlistItemSchema.parse(item);
    const newItem = await wishlistRepository.createItem(item);

    return {
      success: true,
      data: newItem,
      message: "Item criado com sucesso!",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const flattenedErrors = error.flatten();
      throw new ValidationError("Dados inválidos para cadastro", 400, flattenedErrors);
    }
    throw new HttpStatusError("Não foi possível criar um novo item", 400);
  }
}
