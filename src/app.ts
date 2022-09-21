import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

const port = config.get("port") as number;

//const host = (config.get("host") as string) || "localhost";
//for host, im not sure to use that

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  log.info(`Server running on http://localhost:${port}`);
  connect();
  routes(app);
});
