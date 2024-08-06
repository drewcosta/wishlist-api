import { IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";

export async function createWishlistItem(inputItem: IWishlistItem): Promise<IWishlistItem> {
  const newItem = await wishlistRepository.createItem(inputItem);
  return newItem;
}
