import { Response, Request } from 'express';

import UserService from '../services/userService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    // const user = req.body;
    const createdUser = await this.userService.createUser({ username, classe, level, password });
    return res.status(201).json({ token: createdUser });
  };
}