import { NextFunction, Request, Response } from 'express';
import ProductSchema from '../schemas/productSchema';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ProductSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
}; 