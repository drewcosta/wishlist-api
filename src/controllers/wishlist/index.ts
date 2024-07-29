import { getWishlist } from './get-wishlist';
import { getWishlistItemById } from './get-wishlistitemById';
import { createWishlistItem } from './create-wishlistitem';
import { deleteWishlistItemById } from './delete-wishlistitemById';
import { updateWishlistItemById } from './update-wishlistitemById';

const wishlistController = {
  getWishlist,
  getWishlistItemById,
  createWishlistItem,
  deleteWishlistItemById,
  updateWishlistItemById
}

export {
  wishlistController
}
