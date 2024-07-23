import { wishlistItemSchema } from "../schemas/wishlist";
import HttpStatusError from "./HttpStatusError";
import { inferFlattenedErrors } from 'zod';

export default class ValidationError extends HttpStatusError {
  details: inferFlattenedErrors<typeof wishlistItemSchema>

  constructor(message: string, statusCode: number, details: inferFlattenedErrors<typeof wishlistItemSchema>) {
    super(message, statusCode);
    this.details = details;
  }
}
