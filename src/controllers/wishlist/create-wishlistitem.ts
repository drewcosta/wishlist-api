import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';

export async function createWishlistItem(req: express.Request, res: express.Response): Promise<void> {
  try {
    const inputItem = req.body;
    const newItem = await wishlistService.createWishlistItem(inputItem);

    const response: IControllerResponse<typeof newItem> = {
      success: true,
      data: newItem,
      message: "Item criado com sucesso!"
    }

    res.status(201).json(response);
  } catch (error: any) {
    handleError(res, error, 400);
  }
}
