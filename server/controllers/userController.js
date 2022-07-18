import bcrypt from 'bcryptjs';
import User from '../model/User.js';
import { generateToken } from '../helper/generateToken.js';


export const signup = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;
    try {
    const existingUser = await User.findOne({email});
    if(existingUser) return res.status(400).json({message: "Email already exist"})
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });
    const hashPassword = await bcrypt.hash(password, 12);
    const Id = (await User.find()).length + 1;
    const savedUser = await User.create({
        username,
        email,
        password: hashPassword,
        id: Id
    });

    const token = generateToken({
        username,
        id: Id
    })

    res.status(200).json({savedUser, token});
} catch (err) {
    res.status(500).json({
        message: "something went wrong",
        error : err.message });
}
}

export const signIn = async (req, res) => {
    // sign in with email and password
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "Wrong sign in data" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect)  return res.status(404).json({ message: "Wrong sign in data" });
        
        const token = generateToken({
            username: existingUser.username,
            id: existingUser.id
        });

        res.status(200).json({
            token,
            user: {
                 username: existingUser.username,
                 id: existingUser.id
            }
        })
    } catch (err) {
        res.status(500).json({
            message: "something went wrong",
            error: err.message
        });
    }
}

export const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}