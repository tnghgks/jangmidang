import { IUser } from "@/app/types/user";
import { Schema, models, model, Model } from "mongoose";

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,
  role: { type: String, default: "common", required: true },
});

const User: Model<IUser> = models?.User || model("User", UserSchema);

export default User;
