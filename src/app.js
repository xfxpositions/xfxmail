import express from "express";
import config from "./config/development.js";
import log from "./util/logger.js";
import connect from "./db/connect.js";
import routes from "./routes.js";
const port = config.port;

const app = express();
app.use(express.json())
routes(app)

app.listen(port, async() => {
  await connect();
  log.info(`Server running on http://localhost:${port}`);
});
