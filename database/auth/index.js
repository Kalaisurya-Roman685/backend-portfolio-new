import express from 'express';
import { AuthLogin, AuthRegister } from './controlls/Authcontrolls.js';
const router = express.Router();
router.post("/register", AuthRegister);
router.post("/login", AuthLogin);

export default router;