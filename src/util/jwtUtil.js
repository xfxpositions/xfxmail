import { sign, verify, Secret, SignOptions } from "jsonwebtoken";
import config from "config";
import log from "../logger";

const jwtSecret: Secret = config.get("jwt_secret");
const options: SignOptions = {
  expiresIn: "1h",
  issuer: "Xfxmail System",
};

const createToken = (data: object) => {
  return sign({ data }, jwtSecret, options);
};

const checkToken = (token: string) => {
  try {
    verify(token, jwtSecret);
    return true;
  } catch (error) {
    log.error(`Some error in validating jwt => ${error}`);
    return false;
  }
};

const parseToken = (token: string) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};

export { createToken, checkToken, parseToken };
