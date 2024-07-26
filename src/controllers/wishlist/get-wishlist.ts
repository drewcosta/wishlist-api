import express from 'express';
import { wishlistService } from '../../services';
import { handleError } from '../../error';
import { IControllerResponse } from '../../interfaces/IControllerResponse';

export async function getWishlist(req: express.Request, res: express.Response): Promise<void> {
  try {
    const wishlist = await wishlistService.getWishlist();

    const response: IControllerResponse<typeof wishlist> = {
      success: true,
      data: wishlist,
      message: "Todos os itens capturados com sucesso!"
    }

    res.status(200).json(response);
  } catch (error: any) {
    handleError(res, error, 500);
  }
}

