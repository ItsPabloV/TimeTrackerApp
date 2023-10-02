import { Router } from "express";
import { gettasks, puttasks, deletetasks, createtask, gettask } from "../controllers/tasks.controllers.js";

const router = Router();

router.get ('/tasks/:id', gettasks);

router.get ('/task/:id', gettask);

router.post('/task/create', createtask);

router.put('/task/update/:id', puttasks);

router.delete('/task/delete/:id', deletetasks);


export default router;