import User from "../models/User.model.js"
import bcrypt from 'bcrypt'

 export const  registerUser = async(req,res)=>{
  try{
    const {fullname,email,password,mobile,age,gender,height,weight,avatarUrl} = req.body
    
  

    const existringUser = await User.findOne({email})
 

    if(existringUser){
      return res.status(409).json({
        success: false,
        message: "user already exists"
      })
    }

    const hashpassword =  await bcrypt.hash(password,10)

    const user = await User.create({
      fullname,email,password:hashpassword,mobile,age,gender,height,weight,
    })
          
    res.status(201).json({
      success: true,
      message: 'user registered',
      user,
    })

  }catch(error){
    res.status(400).json({
      success: false,
      message: "Invalid user data"
    })
  }
}