import { DeleteResult } from "mongodb";
import { HttpStatusError } from "../../error";
import { wishlistRepository } from "../../repositories";

export async function deleteWishlistItemById(id: string): Promise<DeleteResult> {
  try {
    const deleteResult = await wishlistRepository.deleteItemById(id);

    if (!deleteResult.acknowledged || deleteResult.deletedCount === 0) {
      throw new HttpStatusError("Item não encontrado!", 404);
    }

    return deleteResult;
  } catch (error) {
    throw error;
  }
}