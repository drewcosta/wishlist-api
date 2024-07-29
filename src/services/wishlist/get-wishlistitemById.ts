import { HttpStatusError } from "../../error";
import { IServiceResponse, IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";

export async function getWishlistItemById(id: string): Promise<IWishlistItem> {
  try {
    const item = await wishlistRepository.findItemById(id);

    if (!item) {
      throw new HttpStatusError("Item não encontrado!", 404);
    }

    return item;
  } catch (error) {
    throw error;
  }
}  