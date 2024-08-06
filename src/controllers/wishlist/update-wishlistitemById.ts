import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';
import { IWishlistItem } from '../../interfaces';

export async function updateWishlistItemById(req: express.Request, res: express.Response) {
  try {
    const { name, price } = req.body as IWishlistItem;
    const { id: itemId } = req.params;

    const params = {
      name,
      price
    }

    const updatedItem = await wishlistService.updateWishlistItemById(itemId, params);

    const response: IControllerResponse<typeof updatedItem> = {
      success: true,
      data: updatedItem,
      message: "Item atualizado com sucesso!"
    }

    res.status(200).json(response);
  } catch (error: any) {
    handleError(res, error, 500)
  }
}

