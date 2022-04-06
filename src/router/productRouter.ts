import { Router } from 'express';

import ProductController from '../controllers/productController';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getAll);

export default productRouter;