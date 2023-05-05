import express from 'express';
import { ProjectAllprojects, Projectcreate, Projectdelete, Projectsingle, Projectupdate } from './controlls/Project_controlls.js';
const routerproject = express.Router();
routerproject.post("/create", Projectcreate);
routerproject.put("/update/:id", Projectupdate);
routerproject.delete("/delete/:id", Projectdelete);
routerproject.get("/getsingle/:id", Projectsingle);
routerproject.get("/getallprojects/:id", ProjectAllprojects);


export default routerproject;