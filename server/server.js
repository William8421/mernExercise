import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from "mongoose";


import testRouter from './routes/testRouter.js';
import userRouter from './routes/userRouter.js'
import { connectDB } from "./helper/dbConnect.js";


const server = express()

dotenv.config()

connectDB()
mongoose.connection.on('open', () => {
    console.log('connected to DB');
})
mongoose.connection.on('error', () => {
    console.log('connection to DB has failed', error.messge);
})
server.use(cors())
server.use(express.json())

server.use('/test', testRouter);
server.use('/user', userRouter)

const PORT = process.env.PORT || 9020

server.listen(PORT, console.log(`the server is running and connected to port ${PORT}`))