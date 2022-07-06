// export const mongoose = require("mongoose");
// const bcrypt = require('bcrypt')

// export interface IUser extends Document {
//   username:string;
//   email: string;
//   password: string;
//   avatarImage:string;
//   comparePassword: (password: string) => Promise<Boolean>
// };


// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     min: 3,
//     max: 20,
//     unique: true,
//   },
//   email:{
//     type: String,
//     required: true,
//     unique: true,
//     max: 50,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatarImage: {
//     type: String,
//     default: "",
//   },
// });


// userSchema.pre<IUser>("save", async function(next) {
//   const user = this;

//   if (!user.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(user.password, salt);
//   user.password = hash;

//   next();
// });

// userSchema.methods.comparePassword = async function(
//   password: string
// ): Promise<Boolean> {
//   return await bcrypt.compare(password, this.password);
// };
// export default model<IUser>("User", userSchema);
// module.exports = mongoose.model("Users", userSchema);


//

import { model, Schema, Document } from "mongoose";
 const bcrypt = require('bcrypt')

declare global {
 interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<Boolean>
}
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre<IUser>("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  next();
});

userSchema.methods.comparePassword = async function(
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

const User= model<IUser>("User", userSchema);

export { User, IUser};
