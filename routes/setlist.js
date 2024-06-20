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


function formatDate(date) {
    let [day, month, year] = date.split('-')
    day = Number(day)
    month = Number(month) - 1
    year = Number(year)
    
    const concertDate = new Date(year, month, day)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const prettyDate = concertDate.toLocaleDateString("en-US", options)
    return prettyDate
}


function formatConcert(concert) {
    const date = formatDate(concert.eventDate)
    const venue = concert.venue.name
    const city = concert.venue.city.name
    const state = concert.venue.city.stateCode
    const artistName = concert.artist.name

    const concertHeader = `${artistName} at ${venue} in ${city}, ${state} on ${date}`
    
    return concertHeader

}

function getSongs(sets)
{
    const allSongs = []
    for(let set of sets) {
        const setSongs = set.song;
        for (let setSong of setSongs) {
            let songTitle = setSong.name
            // Checks for medley and makes each song its own song setlist entry
            if(songTitle.includes(' / ')){
                const medley = songTitle.split(' / ')
                for (let medleySong of medley) {
                    allSongs.push(medleySong)
                }
            }
            else allSongs.push(setSong.name)
        }
    }
    return allSongs;
}


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