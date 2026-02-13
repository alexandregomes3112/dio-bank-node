import { Router } from 'express';
import { UserController } from './controller/UserController.js';
import { UserService } from './services/UserService.js';

export const router = Router()

const userService = new UserService();
const userController = new UserController(userService);

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)