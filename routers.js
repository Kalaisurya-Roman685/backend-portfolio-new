import express from 'express';
import routerauth from './database/auth/index.js';
import routerprofile from './database/profile/index.js';
import routerproject from './database/recentproject/index.js';
import routerskill from './database/skills/index.js';


const router = express.Router();





router.use("/auth", routerauth);
router.use("/profile", routerprofile);
router.use("/project", routerproject);
router.use("/skills", routerskill);






export default router;