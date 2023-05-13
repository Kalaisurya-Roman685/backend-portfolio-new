

import express from 'express';

import multer from "multer";

import path from "path";
import { Skillgetall, Skillscreate, Skillsdelete, Skillsingle, Skillsupdate } from './controlls/Skill_controlls';




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
const routerskill = express.Router();
routerskill.post("/create", Skillscreate);
routerskill.put("/update/:id", Skillsupdate);
routerskill.delete("/delete/:id", Skillsdelete);
routerskill.get("/single/:id", Skillsingle);
routerskill.get("/allskills/:id", Skillgetall);

export default routerskill;