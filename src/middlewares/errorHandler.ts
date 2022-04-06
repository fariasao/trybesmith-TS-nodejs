// validacao igual do meu blogs api, so q pra ts
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';

export default function errorHandler(
  error: ValidationError,
  _req: Request, 
  res: Response, 
  _next:NextFunction,
) {
  if (error.details) {
    const [err] = error.details;
    const { type, message } = err;
    if (type === 'any.required') return res.status(400).json({ error: message });
    return res.status(422).json({ error: message });
  }
  return res.status(500).json(error.message);
} 