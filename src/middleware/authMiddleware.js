import { Request, Response, NextFunction } from "express";
import log from "../logger";
import { checkToken } from "../util/jwtUtil";
const additionalRoutes = ["/inbox"];

export default (req, res, next) => {
  log.info(`path => ${req.path}`);
  if (additionalRoutes.includes(req.path)) {
    const token = req.headers.authorization?.substring(7);
    if (checkToken(token)) next();
    else res.status(403).send("unauthorized");
  } else {
    log.info("passed authorization");
    next();
  }
};
