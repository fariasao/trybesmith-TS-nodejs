import { Response, Request } from 'express';

import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    return res.status(200).json(allProducts);
  };

  public createProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const createdProduct = await this.productService.createProduct(name, amount);
    return res.status(201).json({ item: createdProduct });
  };
} 
