import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET, {
        expiresIn: '18000s'
    })
}