import { Express, Request, Response } from "express";
import indexView from "./view/index.view";
import userView from "./view/user.view";
import authView from "./view/auth.view";

export default (app: Express) => {
  app.use(userView);
  app.use(authView);
};
