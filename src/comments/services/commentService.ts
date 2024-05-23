import { PrismaClient } from '@prisma/client';
import { CommentDTO, Comment } from '../../types/comment';

const prisma = new PrismaClient();

export const createCommentService = async (data: CommentDTO): Promise<Comment> => {
  return await prisma.comments.create({
    data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  });
};

export const getCommentsService = async (): Promise<Comment[]> => {
  return await prisma.comments.findMany();
};

// export const getCommentByIdService = async (id: number): Promise<Comment | null> => {
//   return await prisma.comments.findUnique({
//     where: { id },
//   });
// };
