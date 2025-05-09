import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { NextFunction, Request, Response } from 'express';

const generateToken = (username: string, role: string , name:string , idCard:string) => {
    const token = jwt.sign(
        { username, role, name, idCard },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    );
    return token;
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.replace('Bearer ', '');
    if (token === undefined) {
        res.status(401).json({ message: 'No token provided' });
    }
    else {
        try {
            jwt.verify(token, process.env.JWT_SECRET as string);
            const decoded = jwt.decode(token) as { username: string, role: string, name:string, idCard:string };
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
        }
    }
}

export {
    generateToken,
    verifyToken
}