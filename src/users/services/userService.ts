import { PrismaClient } from '@prisma/client';
import { UserDTO, User } from '../../types/user';

const prisma = new PrismaClient();

export const createUserService = async (data: UserDTO): Promise<User> => {
  return await prisma.users.create({
    data: {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};

export const getUsersService = async (): Promise<User[]> => {
  return await prisma.users.findMany();
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  return await prisma.users.findUnique({
    where: { id },
  });
};
