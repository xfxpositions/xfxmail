import { Request, Response } from "express";
import User from "../model/User";
import log from "../logger";
import { error } from "../debug-logger";
import { Error } from "mongoose";

const create_post = (req: Request, res: Response) => {
  const { name, password, forgotMail, phoneNumber } = req.body;
  const user = new User({
    name: name,
    password: password,
    forgotMail: forgotMail,
    phoneNumber: phoneNumber,
  });
  User.find({ name: name }, (result: any) => {
    console.log(result);
  });
  user.save((err, result) => {
    if (err) {
      error(`error while creating new user => ${err.message}`);
      return res.status(400).json({ err: err.message });
    } else {
      return res.status(200).json({ result: result });
    }
  });
};

const delete_delete = (req: Request, res: Response) => {
  console.log("delete");
  const { id } = req.params;
  User.findByIdAndDelete(id, (err: Error, result: any) => {
    if (err) {
      return res.status(400).json({ err: err.message });
    } else {
      return res.status(200).json({ result: result });
    }
  });
};

const update_post = (req: Request, res: Response) => {};

const fetch_get = (req: Request, res: Response) => {};

export { create_post, delete_delete, update_post, fetch_get };
