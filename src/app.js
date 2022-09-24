import express from "express";
import config from "../config/development.js";
import log from "./util/logger.js";
import connect from "./db/connect.js";
const port = config.port;

const app = express();

app.listen(port, () => {
  log.info(`Server running on http://localhost:${port}`);
  connect();
});
