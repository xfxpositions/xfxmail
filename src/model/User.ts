import mongoose, { Schema, model } from "mongoose";

interface IUser {
  name: string;
  password: string;
  forgotMail: string;
  phoneNumber: number;
}

const userSchema = new Schema<IUser>(
  {
    name: {
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
