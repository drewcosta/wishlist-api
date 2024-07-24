import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';

export async function getWishlist(req: express.Request, res: express.Response): Promise<void> {
  try {
    const wishlist = await wishlistService.getWishlist();

    res.status(200).json(wishlist);
  } catch (error: any) {
    handleError(res, error, 500);
  }
}

