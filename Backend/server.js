import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/auth.db.js'
import authRouter from './routes/authRoute.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
    connectDB()
})