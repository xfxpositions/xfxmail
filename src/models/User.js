import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    forgotMail: {
      type: String,
      required: false,
      default: null,
    },
    phoneNumber: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

export default model("user", userSchema);
