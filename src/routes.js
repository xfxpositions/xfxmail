import userView from "./view/userView.js";
import authView from "./view/authView.js";
import authMiddleware from "./middleware/authMiddleware.js";

export default (app) => {
  app.use(authMiddleware);
  app.use(userView);
  app.use(authView);
};
