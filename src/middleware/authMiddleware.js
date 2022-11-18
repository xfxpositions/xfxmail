import log from "../util/logger.js";
import jwtUtil from "../util/jwtUtil.js";
const additionalRoutes = ["/inbox"];

export default (req, res, next) => {
  log.info(`path => ${req.path}`);

  const token = req.headers.authorization?.substring(7);
  if (jwtUtil.checkToken(token)) next();
  else res.status(403).send("unauthorized");
};
