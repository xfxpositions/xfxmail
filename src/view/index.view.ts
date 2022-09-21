import { Router } from "express";
import { index_get } from "../controller/index.controller";
import authMiddleware from "../middleware/auth.middleware";

const router: Router = Router();

router.get("/", authMiddleware, index_get);

export default router;
