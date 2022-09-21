import { Router } from "express";
import { login_post, verify_post } from "../controller/auth.controller";
const router: Router = Router();

router.post("/login", login_post);
router.post("/verify", verify_post);

export default router;
