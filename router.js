import express from 'express';
import router_auth from './module/auth/auth_router.js';
import router_profile from './module/profile/profile_router';

const router = express?.Router();


router.use("/auth", router_auth);
router.use("/profile", router_profile)


export default router;