import express from 'express';
import dotenv from 'dotenv';
import querystring from "querystring"; 
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import { log } from 'console';

dotenv.config({path: "../.env"});
const clientID = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectURI = "http://localhost:8888/api/spotify/callback"
const router = express.Router();


function generateRandomString(length) {
    return Math.random().toString(36).substr(2, length);
}

router.get('/', (req, res) => {
    res.send('Welcome to spotify!');
})





router.get('/login', (req, res) => {
    const state = generateRandomString(16)
    const scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public user-library-read'
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientID,
      scope: scope,
      redirect_uri: redirectURI,
      state: state
    }));

})


async function getToken(spotifyAPI, code)
{
    const tokenData = await spotifyAPI.authorizationCodeGrant(code)
    const accessToken = tokenData.body
    return accessToken
}
router.get('/callback', async (req, res) =>  {

    const code = req.query.code || null;
    const state = req.query.state || null;
    const credentials = {
        clientId: clientID,
        clientSecret: clientSecret,
        redirectUri: redirectURI
    }

    if(state) {
        const spotifyApi = new SpotifyWebApi(credentials)
        const accessToken = await getToken(spotifyApi, code)
        res.send(accessToken)
    } else 
    {
        res.send({error: 'Invalid data'})
    }
  });




export default router;


