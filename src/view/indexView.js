import { Router } from "express";
import { index_get } from "../controller/indexController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.get("/", authMiddleware, index_get);

export default router;
