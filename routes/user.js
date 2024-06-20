import express from 'express';
import User from '../models/User.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Sign in')
})

router.post('/signup', async(req, res) => {
    try
    {
        const emailInUse = await User.findOne({ email: req.body.email})
        if (emailInUse) return res.send('Email already in use')

        const usernameInUse = await User.findOne({ username: req.body.username })
        if (usernameInUse) return res.send('Username already in use')

        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        console.log(error);
    }
})

router.post('/login', async(req, res) => {
    try {
        const dbUser = await User.findOne({ email: req.body.email})
        
        if (!dbUser) return res.send('Email not found')
        if (dbUser.password !== req.body.password) return res.send('Invalid password')

        res.send(dbUser)
    } catch (error) {
        console.log(error);
    }
})


export default router 

