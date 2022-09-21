import { Request, Response } from "express";
const index_get = (req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
};

export { index_get };
