import { Router } from "express";
import {postUsers, getUser} from '../controllers/users.controllers.js'


const router = Router();

router.post('/register', postUsers);

router.get('/user/:correo',getUser);


export default router;