import { WishlistItem } from "../models";
import { wishlistRepository } from "../repositories";

async function getAllWishlistItems(): Promise<WishlistItem[]> {
  return await wishlistRepository.findAll();
}

async function getWishlistById(id: string): Promise<WishlistItem> {
  return await wishlistRepository.findById(id);
}  

async function createWishlistItem(item: WishlistItem): Promise<WishlistItem> {
  return await wishlistRepository.createItem(item);
}

async function updateWishlistItem(id: string, item: WishlistItem): Promise<WishlistItem> {
  return await wishlistRepository.updateItem(id, item);
}

async function deleteWishlistItem(id: string): Promise<WishlistItem> {
  return await wishlistRepository.deleteItem(id);
}

export default {
  getAllWishlistItems,
  getWishlistById,
  createWishlistItem,
  updateWishlistItem,
  deleteWishlistItem
}