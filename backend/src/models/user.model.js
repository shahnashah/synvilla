import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 10,
    },
    profilePic:{
      type:String,
      default:""
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    orders: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
