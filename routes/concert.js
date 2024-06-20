import express from 'express';
import Concert from '../models/Concert.js';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Let\'s add a concert!');
})

router.post('/', async (req, res) => {
    if (req.body.artist) {
        try
        {
            const concert = await Concert.create(req.body)
            res.send(user)
        } catch (error) {
            console.log(error);
        }
    }
        
})