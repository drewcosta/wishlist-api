import { Request, Response, NextFunction } from "express";
import { wishlistItemSchema } from "../../schemas";
import { handleError } from "../../error";

export default async function verifyItemBody(req: Request, res: Response, next: NextFunction) {
  try {
    await wishlistItemSchema.parse(req.body);
    next();
  } catch (error: any) {
    handleError(res, error, 400);
  }
}