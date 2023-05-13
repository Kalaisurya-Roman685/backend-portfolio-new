import express from 'express';
import { ProfileAll, ProfileDelete, ProfileSingleuser, Profilecreate, Profileupdate } from './controlls/Profile_controlls.js';

const routerprofile = express.Router();

routerprofile.post("/create", Profilecreate);
routerprofile.put("/update/:id", Profileupdate);
routerprofile.get("/single/:id", ProfileSingleuser);
routerprofile.get("/allprofiles/:id", ProfileAll);
routerprofile.delete("/delete/:id", ProfileDelete);

export default routerprofile;