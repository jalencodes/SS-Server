import express from 'express';
import { searchArtist } from '../ext-api-data/setlist-fm.js';



const router = express.Router();

router.get('/', (req, res) => {
    res.send('Let\'s make a setlist!');
})

router.get('/search/artist/', async (req, res) => {
    if (req.body.artist) {
        const artistName = req.body.artist;
        console.log(artistName);
        try {
            const artists = await searchArtist(artistName);
            console.log(artists);
            res.send(artists);
        } catch (error) {
            console.log(error);
        }
    }
    else {
        res.status(400).send('Please provide an artist name');
    }
})


export default router;