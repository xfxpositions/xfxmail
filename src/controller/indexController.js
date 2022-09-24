import { Request, Response } from "express";
const index_get = (req, res) => {
  res.json({ message: "Hello world!" });
};

export { index_get };
