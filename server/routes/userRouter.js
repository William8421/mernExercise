import express from 'express';
import { signup, signIn, getAllUsers } from '../controllers/userController.js';
import authenticateToken from '../middlewares/verifyToken.js'


const router = express.Router()

router.post('/signup', signup);
router.post('/signin',authenticateToken, signIn);
router.get('/allusers', authenticateToken, getAllUsers)

export default router