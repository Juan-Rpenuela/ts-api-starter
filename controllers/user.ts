import {Request, Response} from 'express';
import UserService  from '../services/user'; 
import bcrypt from 'bcrypt';
import { generateToken } from '../helpers/auth';



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
        const { username, password} = req.body;
        const existingUser = await UserService.getByUsername(username);
        if (existingUser !== null) {
            res.status(400).json({ message: 'User already exists' });
            console.log('User already exists:', existingUser);
        }
        console.log('Creating user:', req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserService.create({...req.body, password: hashedPassword});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating User' });
        console.error('Error creating user:', error);
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

const login = async ( req: Request, res: Response) => {
    try{
        const {username, password } = req.body;
        const user = await UserService.getByUsername(username);
        if (user === null) {
            res.status(401).json({ message: 'Invalid username' });
        }
        else{
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid password' });

        }
        const token = await generateToken(user.username, user.role);
        console.log('Token generated:', token);
        res.status(200).json({ message: 'Login successful', token });}
    }catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
}

export default {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
}