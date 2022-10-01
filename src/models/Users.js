import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new Schema(
  {
    user: String,
    password: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);
export default model("user", userSchema);