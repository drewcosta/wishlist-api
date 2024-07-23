import { Response } from 'express';
import HttpStatusError from './HttpStatusError';
import ValidationError from './ValidationError';

export default function handleError(response: Response, error: Error | HttpStatusError, statusCode: number) {
  if (error instanceof ValidationError) {
    response.status(error.statusCode).json({
      message: error.message,
      details: error.details
    });
  } else if (error instanceof HttpStatusError) {
    response.status(error.statusCode).json({ message: error.message })
  } else if (error instanceof Error) {
    response.status(statusCode).json({ message: error.message });
  } else {
    response.status(500).json({ message: "Interval server error" });
  }
};