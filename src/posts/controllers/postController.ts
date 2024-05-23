import { Request, Response } from 'express';
import { createPostService, getPostsService, getPostByIdService } from '../services/postService';
import { PostDTO } from '../../types/post';

export const createPost = async (req: Request, res: Response) => {
  try {
    const data: PostDTO = req.body;
    const post = await createPostService(data);
    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsService();
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await getPostByIdService(Number(req.params.id));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
