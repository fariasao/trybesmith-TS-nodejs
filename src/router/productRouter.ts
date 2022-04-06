import { Router } from 'express';

import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getAll);

productRouter.post('/', validateProduct, productController.createProduct);

export default productRouter;