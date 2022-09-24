import { Router } from "express";
import {
  create_post,
  delete_delete,
  fetch_get,
  update_post,
} from "../controller/userController";

const router = Router();

const basePath = "/user";

router.post(`${basePath}/register`, create_post);
router.delete(`${basePath}/delete/:id`, delete_delete);
router.post(`${basePath}/update`, update_post);
router.get(`${basePath}/:id`, fetch_get);

export default router;
