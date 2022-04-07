import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/IOrders';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    // Query cm ajuda do assis
    const [result] = await this.connection.execute(
      `SELECT 
          Orders.id, Orders.userId, Products.id AS products
      FROM
        Trybesmith.Orders
      INNER JOIN
        Trybesmith.Products ON Products.orderId = Orders.id
      GROUP BY Products.id;`,
    );

    return result as IOrders[];
  }
} 