import express from 'express'
import { Signup, Login } from '../controllers/authController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/signup', Signup)
router.post('/login', Login)

router.get('/profile', verifyToken, (req, res) => {
    console.log('verified')
})


export default router