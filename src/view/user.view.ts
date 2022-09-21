import { Router } from "express";
import {
  create_post,
  delete_delete,
  fetch_get,
  update_post,
} from "../controller/user.controller";

const router: Router = Router();

const basePath = "/user";

router.post(`${basePath}/register`, create_post);
router.post(`${basePath}/delete`, delete_delete);
router.post(`/${basePath}/update`, update_post);
router.get(`${basePath}/:id`, fetch_get);

export default router;
