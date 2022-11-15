import { Router } from "express";
import { index_get } from "../controller/indexController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, index_get);

export default router;
