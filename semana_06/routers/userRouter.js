import express from 'express';
import { 
    getUsers, 
    postUser,
    getUserById,
    deleteUserById,
    updateUserById,
    auth 
} from '../controllers/userController.js';

const router = express.Router();

router.post('/auth', auth);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', postUser);
router.delete('/:id', deleteUserById);
router.put('/:id', updateUserById);

export default router;