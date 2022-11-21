import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;
const defaultOptions = {
  issuer: "Xfxmail System",
};

const createToken = (data, secret, options) => {
  !options && (options = defaultOptions);
  !secret && (secret = jwtSecret);
  return jwt.sign(data, secret, options);
};

const checkToken = (token, secret) => {
  //console.log("SECRET => " + secret);
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    console.log(`Some error in validating jwt => ${error}`);
    return {
      status: false,
      message: error.message,
    };
  }
};

const parseToken = (token) => {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch (err) {
    return err.message;
  }
};

export default { createToken, checkToken, parseToken };
