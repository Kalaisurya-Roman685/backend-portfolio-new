import express from 'express';
import { Skillgetall, Skillscreate, Skillsdelete, Skillsingle, Skillsupdate } from './controlls/Skill_controlls';
const routerskill = express.Router();
routerskill.post("/create", Skillscreate);
routerskill.put("/update/:id", Skillsupdate);
routerskill.delete("/delete/:id", Skillsdelete);
routerskill.get("/single/:id", Skillsingle);
routerskill.get("/allskills/:id", Skillgetall);

export default routerskill;