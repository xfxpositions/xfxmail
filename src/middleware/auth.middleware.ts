import { Request, Response, NextFunction } from "express";
import log from "../logger";

export default (req: Request, res: Response, next: NextFunction) => {
  log.info(req.headers);
  next();
};
