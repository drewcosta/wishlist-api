import { DeleteResult, ObjectId } from "mongodb";
import { WishlistItem } from "../../models/wishlist/wishlistitem";

export async function deleteItemById(id: string): Promise<DeleteResult> {
  const deleteResult = await WishlistItem.deleteOne({ _id: new ObjectId(id) });

  return deleteResult;
}