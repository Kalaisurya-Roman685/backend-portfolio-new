import express from 'express';
import multer from "multer";

import path from "path";
import { ProjectAllprojects, Projectcreate, Projectdelete, Projectsingle, Projectupdate } from './controlls/Project_controlls.js';


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


const routerproject = express.Router();
routerproject.post("/create", upload, Projectcreate);
routerproject.put("/update/:id", upload, Projectupdate);
routerproject.delete("/delete/:id",Projectdelete);
routerproject.get("/getsingle/:id",Projectsingle);
routerproject.get("/getallprojects/:id", ProjectAllprojects);


export default routerproject;