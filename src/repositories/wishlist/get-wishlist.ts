import { IWishlistItem } from '../../interfaces';
import { WishlistItem } from '../../models/wishlist/wishlistitem';

export async function findAllItems(): Promise<IWishlistItem[]> {
  const wishlistitems = await WishlistItem.find({});

  return wishlistitems;
}