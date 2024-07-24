import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';

export async function createWishlistItem(req: express.Request, res: express.Response): Promise<void> {
  try {
    const newItem = req.body;
    const wishlist = await wishlistService.createWishlistItem(newItem);

    res.status(201).json(wishlist);
  } catch (error: any) {
    handleError(res, error, 400);
  }
}
