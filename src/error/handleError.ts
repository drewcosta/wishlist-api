import { Response } from 'express';
import HttpStatusError from './HttpStatusError';
import { ZodError } from 'zod';

export default function handleError(response: Response, error: Error | HttpStatusError, statusCode: number) {
  if (error instanceof ZodError) {
    const flattenedErrors = error.flatten();
    response.status(statusCode).json({
      message: "Dados inválidos!",
      details: flattenedErrors.fieldErrors
    });
  } else if (error instanceof HttpStatusError) {
    response.status(error.statusCode).json({ message: error.message })
  } else if (error instanceof Error) {
    response.status(statusCode).json({ message: error.message });
  } else {
    response.status(500).json({ message: "Interval server error" });
  }
};