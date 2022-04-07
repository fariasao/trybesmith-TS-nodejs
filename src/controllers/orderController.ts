import { Response, Request } from 'express';

import OrderService from '../services/orderService';

export default class OrderController {
  constructor(
    private orderService = new OrderService(),
  ) {}

  public getAll = async (req: Request, res: Response) => {
    const results = await this.orderService.getAll();
    return res.status(200).json(results);
  };
}