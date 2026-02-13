import { type Request, type Response } from 'express';
import { UserService } from '../services/UserService.js';

export class UserController {
    userService: UserService
    
    constructor(
        userService: UserService
    ) {
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if(!user.id || !user.name || !user.email) {
            return response.status(400).json({message: 'Missing required fields: id, name, email'});
        }

        this.userService.createUser(user.id, user.name, user.email);
        return response.status(201).json({message: `User ${user.name} created successfully`, user});
      }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers();
        return response.status(200).json(users);
    }

    
}
