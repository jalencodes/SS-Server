import express from 'express';
import { searchArtist, getArtistConcerts } from '../ext-api-data/setlist-fm.js';



const router = express.Router();

router.get('/', (req, res) => {
    res.send('Let\'s make a setlist!');
})

router.get('/search/artist', async (req, res) => {
    if (req.query.name) {
        const artistName = req.query.name;
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


router.get('/search/:mbid/', async (req, res) => {
    try {
        const setlists = await getArtistConcerts(req.params.mbid);
        res.send(setlists);
    } catch (error) {
        console.log(error);
    }
})


router.get('/search/:mbid/:index', async (req, res) => {
    try {
        const setlists = await getArtistConcerts(req.params.mbid);
        const setlist = setlists[req.params.index];
        res.send(setlist);
    } catch (error) {
        console.log(error);
    }
})


export default router;