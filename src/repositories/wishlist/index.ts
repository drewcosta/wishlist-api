import { findAllItems } from './get-wishlist';
import { findItemById } from './get-wishlistitemById';
import { createItem } from './create-wishlistitem';
import { deleteItemById } from './delete-wishlistitem';
import { updateItem } from './update-wishlistitem';

const wishlistRepository = {
  findAllItems,
  findItemById,
  createItem,
  deleteItemById,
  updateItem
}

export {
  wishlistRepository
}