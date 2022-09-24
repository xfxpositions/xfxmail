import { Router } from "express";
import { login_post, verify_post } from "../controller/authController";
const router = Router();

router.post("/login", login_post);
router.post("/verify", verify_post);

export default router;
