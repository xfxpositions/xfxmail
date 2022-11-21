import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      maxLength: 32,
      minLength: 4,
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 64,
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
