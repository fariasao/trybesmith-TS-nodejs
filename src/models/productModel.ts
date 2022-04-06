import { Pool, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/IProducts';

export default class ProductModel { 
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as IProduct[];
  }
} 