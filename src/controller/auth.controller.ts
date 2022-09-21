import { Request, Response } from "express";
import { createToken } from "../util/jwt.util";
import { verifyToken } from "../util/jwt.util";

const login_post = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = createToken({ username: username, password: password });
  res.json({ token: token });
};

const verify_post = (req: Request, res: Response) => {
  const { token } = req.body;
  res.json({ status: verifyToken(token) });
};

export { login_post, verify_post };
