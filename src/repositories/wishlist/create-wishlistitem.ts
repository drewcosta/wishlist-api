import { IWishlistItem } from '../../interfaces';
import { WishlistItem } from '../../models/wishlist/wishlistitem';

export async function createItem(item: IWishlistItem): Promise<IWishlistItem> {
  const newItem = new WishlistItem(item);
  const savedItem = await newItem.save();

  return savedItem;
}
