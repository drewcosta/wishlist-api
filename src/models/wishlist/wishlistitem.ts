import {Schema, model} from 'mongoose';
import { IWishlistItem } from '../../interfaces';

const wishlistItemSchema = new Schema<IWishlistItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  collection: 'wishlist',
});


export const WishlistItem = model<IWishlistItem>('WishlistItem', wishlistItemSchema);
