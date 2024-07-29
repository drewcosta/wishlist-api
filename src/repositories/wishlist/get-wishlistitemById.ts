import { ObjectId } from "mongodb";
import { WishlistItem } from "../../models/wishlist/wishlistitem";
import { IWishlistItem } from "../../interfaces";

export async function findItemById(id: string): Promise<IWishlistItem | null> {
  const item = await WishlistItem.findById({ _id: new ObjectId(id) });

  return item;
}