import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

export default class UserModel { 
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser):Promise<IUser> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    ); 
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}