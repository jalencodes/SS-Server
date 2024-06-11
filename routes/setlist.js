import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Let\'s make a setlist!');
})


export default router;