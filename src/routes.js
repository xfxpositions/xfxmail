import userView from "./view/user.view";
import authView from "./view/auth.view";
import authMiddleware from "./middleware/auth.middleware";

export default (app) => {
  app.use(authMiddleware);
  app.use(userView);
  app.use(authView);
};
