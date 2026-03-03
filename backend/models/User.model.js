import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  age:{
    type:Number,
    required: true,

  },
  gender:{
    type: String,
    enum: ['male','female'],
    required: true,

  },
  height:{
    type:Number,
    required:true
  },
  weight:{
    type:Number,
    required:true
  },
  avatarUrl:{
    type: String
  },
  role:{
    type: String,
    enum: ['user','admin'],
    default: 'user'
  }
},
{
  timestamps: true
})

const User = mongoose.model("User",userSchema)

export default User