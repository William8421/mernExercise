import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.status(401).json({message: 'Forbidden'})
    jwt.verify(token, process.env.SECRET,
        (err, user) => {
            if(err) return res.status(403).json({message: 'Forbidden!!!'})
            req.user = user;
            next()
        }
    )
}

export default authenticateToken