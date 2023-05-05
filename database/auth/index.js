import express from 'express';
import { AuthRegister } from './controlls/Authcontrolls.js';
const router = express.Router();
router.post("/register", AuthRegister);
export default router;