import { type Request, type Response } from 'express';
import { UserService } from '../services/UserService.js';

export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService();
        const user = request.body;

        if(!user.id || !user.name || !user.email) {
            return response.status(400).json({message: 'Missing required fields: id, name, email'});
        }

        userService.createUser(user.id, user.name, user.email);
        return response.status(201).json({message: `User ${user.name} created successfully`, user});
      }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService();
        const users = userService.getAllUsers();
        return response.status(200).json(users);
    }
}
