import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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
    // parecido cm exemplo do course 26.3
  }

  public async createProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    ); 
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, amount };
    // parecido cm exemplo do course 26.3
  }
} 