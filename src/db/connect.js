import mongoose from "mongoose";
import config from "../config/development.js";
import log from "../util/logger.js";
const connect = async() => {
  const dbUrl = config.dbUrl_local;
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
