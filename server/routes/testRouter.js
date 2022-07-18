import express from "express";
import {getTest, postTest} from '../controllers/testingController.js'
const router = express.Router()


router.get('/', getTest)

router.post('/', postTest)

export default router