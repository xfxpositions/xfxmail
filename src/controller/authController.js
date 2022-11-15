import jwtUtil from "../util/jwtUtil.js";


const login_post = (req, res) => {
  const { username, password } = req.body;
  const token = jwtUtil.createToken({ username: username, password: password });
  res.json({ token: token });
};

const verify_post = (req, res) => {
  const { token } = req.body;
  res.json({ status: jwtUtil.checkToken(token) });
};

export { login_post, verify_post };
