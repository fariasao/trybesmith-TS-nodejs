import OrderModel from '../models/orderModel';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() {
    const orders = await this.model.getAll();

    const results = orders.map((order) => ({ ...order, products: [order.products] }));

    return results;
  }
}
