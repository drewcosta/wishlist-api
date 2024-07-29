import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';

export async function updateWishlistItemById(req: express.Request, res: express.Response) {
  try {
    const inputItem = req.body;
    const itemId = req.params.id;

    const updatedItem = await wishlistService.updateWishlistItemById(itemId, inputItem);

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

