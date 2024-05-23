import { PrismaClient } from '@prisma/client';
import { PostDTO, Post } from '../../types/post';

const prisma = new PrismaClient();

export const createPostService = async (data: PostDTO): Promise<Post> => {
  return await prisma.posts.create({
    data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  });
};

export const getPostsService = async (): Promise<Post[]> => {
  return await prisma.posts.findMany();
};

export const getPostByIdService = async (id: number): Promise<Post | null> => {
  return await prisma.posts.findUnique({
    where: { id },
  });
};
