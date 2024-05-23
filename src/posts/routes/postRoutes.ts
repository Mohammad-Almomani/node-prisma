import { Router } from 'express';
import { createPost, getPosts, getPostById } from '../controllers/postController';

const router = Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);

export default router;
