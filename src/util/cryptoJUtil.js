import cryptojs from "crypto-js";

const saltKey = process.env.PASSWORD_SALT;

const hash_password = (data) =>
  cryptojs.SHA256(data + saltKey).toString(cryptojs.enc.Hex);

export {hash_password};
