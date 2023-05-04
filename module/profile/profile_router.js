import express from 'express';
import { Profile_router_Update, Profile_router_create, Profile_router_Single, Profile_router_Delete } from './index.js';

const router = express.Router();


router.post("/create", Profile_router_create);
router.put("/update/:id", Profile_router_Update);
router.get("/single/:id", Profile_router_Single);
router.delete("/delete/:id", Profile_router_Delete);



export default router;