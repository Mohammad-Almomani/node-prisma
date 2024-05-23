import { Router } from 'express';
import { createUser, getUsers, getUserById, createBashar } from '../userController';

const router = Router();

router.post('/', createUser);
router.post('/bashar', createBashar);
router.get('/', getUsers);
router.get('/:id', getUserById);

export default router;
