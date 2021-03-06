import IProduct from '../interfaces/IProducts';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async createProduct(name: string, amount: string) {
    const createdProduct = await this.model.createProduct(name, amount);
    return createdProduct;
  }
}