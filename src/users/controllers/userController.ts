import { Request, Response } from 'express';
import { createUserService, getUsersService, getUserByIdService } from '../services/userService';
import { UserDTO } from '../../types/user';

export const createUser = async (req: Request, res: Response) => {
  try {
    const data: UserDTO = req.body;
    const user = await createUserService(data);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await getUserByIdService(Number(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
