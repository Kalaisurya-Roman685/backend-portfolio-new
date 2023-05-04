import express from "express";
import { LoginRouter, RegisterRouter } from "./index.js";

const router = express.Router();


router.post("/login", LoginRouter);
router.post("/register", RegisterRouter);


export default router;