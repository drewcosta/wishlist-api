import { HttpStatusError } from "../../error";
import { IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";

export async function updateWishlistItemById(itemId: string, inputItem: IWishlistItem): Promise<IWishlistItem> {
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
}