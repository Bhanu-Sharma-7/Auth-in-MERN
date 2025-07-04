import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../middleware/authMiddleware.js'


export const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10)
        const existingUser = await  userModel.findOne({ email })

        if(existingUser) {
            return res.status(400).json({ message: "Email already have" })
        }
        
        if(password.length < 6) {
            return res.status(400).json({ message: "Password must more than 5" })
        }

        const newUser = new userModel({
            username,
            email,
            password: hashPassword
        })
        
        await newUser.save()
        const token = generateToken(newUser._id)
        res.status(200).json({ message: "User Created Successfuly", token })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
    
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        
        if(password.length < 6) {
            return res.status(400).json({ message: "Password must more than 5" })
        }
        
        const matchPassword = await bcrypt.compare(password, user.password)
        
        if(!matchPassword) {
            return res.status(401).json({ message: "Invalid information" })
        }
        
        const token = generateToken(user._id)
        res.status(200).json({ message: "User Created Successfuly", token })
        
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
    
}