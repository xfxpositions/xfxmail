import jwtUtil from "../util/jwtUtil.js";
import User from "../models/User.js";

export default (req, reply, done) => {
  const avoidedRoutes = ["/login", "signup"];
  if (avoidedRoutes.includes(req.url)) done();
  const token = req.headers.authorization?.substring(7);
  const decodedToken = jwtUtil.parseToken(token);

  User.findOne({ username: decodedToken.username }, (err, result) => {
    if (result == null) {
      reply.status(401).send("unauthorized");
    } else {
      if (jwtUtil.checkToken(token, process.env.JWT_SECRET + result.password)) {
        done();
      } else {
        reply.status(401).send("unauthorized");
      }
    }
  });
};
