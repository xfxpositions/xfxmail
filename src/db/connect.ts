import mongoose from "mongoose";
import config from "config";
import log from "../logger";
const connect = () => {
  const dbUrl = config.get("dbUrl") as string;
  return mongoose
    .connect(dbUrl)
    .then(() => {
      log.info(`Connected to database`);
    })
    .catch((err) => {
      log.error(`some err on connecting database => ${err}`);
      process.exit(1);
    });
};

export default connect;
