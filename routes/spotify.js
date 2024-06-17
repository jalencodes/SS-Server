import express from 'express';
import dotenv from 'dotenv';
import querystring from "querystring"; 

dotenv.config({path: "../.env"});
const clientID = process.env.SPOTIFY_CLIENT_ID
const redirectURI = "http://localhost:8888/callback"
const router = express.Router();


function generateRandomString(length) {
    return Math.random().toString(36).substr(2, length);
}

router.get('/', (req, res) => {
    res.send('Welcome to spotify!');
})

// router.get('/login', (req, res) => {
//     const state = generateRandomString(16)
//     const scope = 'user-read-private user-read-email'
//     res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: clientID,
//       scope: scope,
//       redirect_uri: redirectURI,
//       state: state
//     }));

// })


export default router;


