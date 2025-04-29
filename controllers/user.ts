import {Request, Response} from 'express';
import UserService  from '../services/user'; 

const getAllUser = async (req: Request, res: Response) => {
    try{
        const users = await UserService.getAll();
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}

const getUserById = async (req : Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await UserService.getById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const user = await UserService.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating User' });
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UserService.update(id , req.body);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UserService.deleteUser(id);
        if (!user){
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
}

export default {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}