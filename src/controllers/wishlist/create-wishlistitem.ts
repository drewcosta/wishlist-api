import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';
import { IWishlistItem } from '../../interfaces';

export async function createWishlistItem(req: express.Request, res: express.Response): Promise<void> {
  try {
    const { name, price } = req.body as IWishlistItem;

    const params = {
      name,
      price
    }

    const newItem = await wishlistService.createWishlistItem(params);

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
