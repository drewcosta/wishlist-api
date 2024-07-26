import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';

export async function deleteWishlistItemById(req: express.Request, res: express.Response): Promise<void> {
  try {
    const itemId = req.params.id;
    await wishlistService.deleteWishlistItemById(itemId);

    const response: IControllerResponse = {
      success: true,
      message: "Item deletado com sucesso!"
    }

    res.status(200).json(response);
  } catch (error: any) {
    handleError(res, error, 500);
  }
}

