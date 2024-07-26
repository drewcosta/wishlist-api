import { IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";

export async function getWishlist(): Promise<IWishlistItem[]> {
  try {
    const allItems = await wishlistRepository.findAllItems();

    return allItems;
  } catch (error) {
    throw error;
  }
}

