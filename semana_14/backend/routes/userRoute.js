import express from "express"
import { getUsers, postUser, deleteUser, login } from "../controllers/UserController.js" 
import isAdmin  from '../middlewares/isAdmin.js'
import auth from "../middlewares/auth.js";
const router = express.Router();

router.get('/', auth, isAdmin, getUsers);
router.post('/', postUser);
router.delete('/:id', auth, isAdmin, deleteUser );
router.post('/auth', login);

export default router