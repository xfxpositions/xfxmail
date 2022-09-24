import { Request, Response } from "express";
import { createToken } from "../util/jwtUtil";
import { checkToken } from "../util/jwtUtil";

const login_post = (req, res) => {
  const { username, password } = req.body;
  const token = createToken({ username: username, password: password });
  res.json({ token: token });
};

const verify_post = (req, res) => {
  const { token } = req.body;
  res.json({ status: checkToken(token) });
};

export { login_post, verify_post };
