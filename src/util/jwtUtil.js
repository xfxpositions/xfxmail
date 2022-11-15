import a from "jsonwebtoken";
const { sign, verify } = a;
import config from "../config/development.js";
import log from "../util/logger.js";

const jwtSecret = config.jwt_secret;
const defaultOptions = {
  expiresIn: "1h",
  issuer: "Xfxmail System",
};

const createToken = (data,secret=jwtSecret,options=defaultOptions,) => {
  return sign({ data }, secret, options);
};

const checkToken = (token,secret=jwtSecret) => {
  try {
    verify(token, jwtSecret+secret);
    return true;
  } catch (error) {
    log.error(`Some error in validating jwt => ${error}`);
    return false;
  }
};

const parseToken = (token) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};

export default { createToken, checkToken, parseToken };
