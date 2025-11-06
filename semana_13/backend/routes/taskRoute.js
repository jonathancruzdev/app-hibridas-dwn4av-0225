import express from "express"
import auth from "../middlewares/auth.js";

import { getTask, postTask, getTaskById, putTask, deleteTask } from "../controllers/TaskController.js" 

const router = express.Router();

router.use( auth );

router.get('/', getTask);
router.get('/:id', getTaskById);
router.post('/', postTask);
router.put('/:id', putTask );
router.delete('/:id', deleteTask );

export default router