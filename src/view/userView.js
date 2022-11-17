import { Router } from "express";
import {
  create_post,
  delete_delete,
  fetch_get,
  update_post,
  recoverPassword_get,
  recoverPassword_post,
} from "../controller/userController.js";

const router = Router();

const basePath = "/user";

router.post(`/signup`, create_post);
router.delete(`${basePath}/delete/:id`, delete_delete);
router.post(`${basePath}/update`, update_post);
router.get(`${basePath}/:id`, fetch_get);
router.post(`/recovery/password`, recoverPassword_post);
router.get(`/recovery/:token`, recoverPassword_get);

export default router;
