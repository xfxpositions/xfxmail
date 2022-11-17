import jwtUtil from "../util/jwtUtil.js";
import User from "../model/User.js";

const login_post = (req, res) => {
  const { name, password } = req.body;
  console.log([{ name: name }, { password: password }]);
  User.findOne(
    { $and: [{ name: name }, { password: password }] },
    (err, result) => {
      console.log(result);
      if (result == null) {
        res.status(404).json({ err: "not found" });
      } else if (err) {
        res.status(403).json({ dbErr: err.message });
      } else {
        const token = jwtUtil.createToken({
          name: name,
          password: password,
        });
        res.json({ token: token });
      }
    }
  );
};

const verify_post = (req, res) => {
  const { token } = req.body;
  res.json({ status: jwtUtil.checkToken(token) });
};

export { login_post, verify_post };
