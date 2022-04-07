import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import UserModel from '../models/userModel';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser) {
    const token = jwt.sign(user, 'salame', { expiresIn: '1h' });
    
    await this.model.createUser(user);

    return token;
  }
} 