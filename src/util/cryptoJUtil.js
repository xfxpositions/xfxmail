import { SHA256, enc } from "crypto-js";
import config from "../config/development.js";

const saltKey = config.saltKey;

const encrypt = (data) => SHA256(data + saltKey).toString(enc.Hex);

export { encrypt };
