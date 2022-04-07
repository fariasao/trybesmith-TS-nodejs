import { NextFunction, Request, Response } from 'express';
import userSchema from '../schemas/userSchema';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    return next(e);
  }
};