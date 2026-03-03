import mongoose from "mongoose";

const conncet = async()=>{
  try{

    mongoose.connect(process.env.MONGODB_URL)
    console.log('mongodb connceted...')

  }catch(error){
    console.log(`fail to connect to mongodb`)
  }
}
export default conncet