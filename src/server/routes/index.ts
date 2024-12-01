import { Router } from 'express';
import todosRouter from './todos';


//api router
const router = Router();

router.use('/todos', todosRouter);

export default router;