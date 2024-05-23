import { Router } from 'express';
import { createComment, getComments } from '../controllers/commentController';

const router = Router();

router.post('/', createComment);
router.get('/', getComments);
// router.get('/:id', getCommentById);

export default router;
