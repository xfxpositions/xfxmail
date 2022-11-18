import cryptojs from "crypto-js";

const saltKey = process.env.PASSWORD_SALT;

const encrypt = (data) =>
  cryptojs.SHA256(data + saltKey).toString(cryptojs.enc.Hex);

export { encrypt };
