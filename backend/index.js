import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import conncet from './config/db.js'
import UserRoute from './routes/User.route.js'

conncet()

const app = express()
const PORT= process.env.PORT
app.use(express.json())



app.get('/',(req,res)=>{
  res.send('<h1>hello world</h1>')
})

app.use('/api/v1/user',UserRoute)
app.listen(PORT,()=>{
  console.log(`your server is running on http://localhost:${PORT}`)
})
