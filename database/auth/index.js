import express from 'express';
import { AuthForgetpassword, AuthForgetpasswordVerify, AuthLogin, AuthRegister, AuthUser, AuthUserdetails } from './controlls/Authcontrolls.js';
const router = express.Router();
router.post("/register", AuthRegister);
router.post("/login", AuthLogin);
router.post("/forgetpassword", AuthForgetpassword);
router.post("/reset-password/:id", AuthForgetpasswordVerify);
router.get("/profile/:id", AuthUserdetails);
router.put("/profile/update/:id", AuthUser);





export default router;