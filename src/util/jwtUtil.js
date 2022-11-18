import jwt from "jsonwebtoken";

const jwtSecret = config.jwt_secret;
const defaultOptions = {
  issuer: "Xfxmail System",
};

const createToken = (data, secret, options) => {
  !options && (options = defaultOptions);
  !secret && (options = defaultOptions);
  console.log(options);
  return jwt.sign(data, secret, options);
};

const checkToken = (token, secret) => {
  if (secret == undefined) {
    secret = jwtSecret;
  }
  console.log("SECRET => " + secret);
  try {
    verify(token, jwtSecret + secret);
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
