import jwtUtil from "../util/jwtUtil.js";
import User from "../models/User.js";

export default (req, reply, done) => {
  const avoidedRoutes = ["/login", "/signup"];
  if (avoidedRoutes.includes(req.url)) {
    console.log("AVOIDED");
    done();
  } else {
    const token = req.headers.authorization?.substring(7);
    const decodedToken = jwtUtil.parseToken(token);

    User.findOne({ username: decodedToken.username }, (err, result) => {
      if (result == null) {
        reply
          .status(401)
          .send({ status: "unauthorized", message: "token user not found" });
      } else {
        const checkJwt = jwtUtil.checkToken(
          token,
          process.env.JWT_SECRET + result.password
        );
        if (checkJwt.status) {
          done();
        } else {
          reply
            .status(401)
            .send({ status: "unauthorized", message: checkJwt.message });
        }
      }
    });
  }
};
