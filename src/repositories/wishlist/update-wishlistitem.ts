import { ObjectId } from 'mongodb';
import { WishlistItem } from '../../models/wishlist/wishlistitem';
import { IWishlistItem } from '../../interfaces';

export async function updateItem(id: string, item: IWishlistItem): Promise<IWishlistItem | null> {
  const updateItem = await WishlistItem.findByIdAndUpdate(
    { _id: new ObjectId(id) },
    { $set: item },
    { new: true, runValidators: true }
  ).exec();

  return updateItem;
}
