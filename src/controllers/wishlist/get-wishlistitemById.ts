import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';

export async function getWishlistItemById(req: express.Request, res: express.Response): Promise<void> {
  try {
    const itemId = req.params.id;
    const wishlistItem = await wishlistService.getWishlistItemById(itemId);

    const response: IControllerResponse = {
      success: true,
      data: wishlistItem,
      message: "Item encontrado!"
    }

    res.status(200).json(response);
  } catch (error: any) {
    handleError(res, error, 500);
  }
}

