import { Request, Response } from 'express';
import { createCommentService, getCommentByIdService, getCommentsService } from '../services/commentService';
import { CommentDTO, Comment } from '../../types/comment';

export const createComment = async (req: Request, res: Response) => {
  try {
    const data: CommentDTO = req.body;
    const comment = await createCommentService(data);
    res.status(201).json(comment);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await getCommentsService();
    res.status(200).json(comments);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  try {
    const comment: Comment | null = await getCommentByIdService(Number(req.params.id));
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
