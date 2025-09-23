import express from 'express';
import { 
    getUsers, 
    postUser,
    getUserById,
    deleteUserById,
    updateUserById,
    auth 
} from '../controllers/userController.js';

import { validarToken } from "../middlewares/auth.js"

const router = express.Router();

router.post('/auth', auth);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', validarToken, postUser);
router.delete('/:id', validarToken, deleteUserById);
router.put('/:id', validarToken, updateUserById);

export default router;