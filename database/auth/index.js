import express from 'express';
import multer from "multer";

import path from "path";
import { AuthForgetpassword, AuthForgetpasswordVerify, AuthLogin, AuthRegister, AuthUser, AuthUserdetails, ProfileImage } from './controlls/Authcontrolls.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")
    },
    filename: (req, file, cb) => {
        return cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: "100000" },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/

        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }

        cb("Give proper files formate to upload images....")
    }
}).single("image");
router.post("/register", AuthRegister);
router.post("/login", AuthLogin);
router.post("/forgetpassword", AuthForgetpassword);
router.post("/reset-password/:id", AuthForgetpasswordVerify);
router.get("/profile/:id", AuthUserdetails);
router.put("/profile/update/:id", AuthUser);
router.put("/profile/image/:id", upload, ProfileImage)





export default router;