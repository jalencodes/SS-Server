import SpotifyWebApi from 'spotify-web-api-node'
import dotenv from 'dotenv'
dotenv.config({path:'../.env'})

const clientID = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectURI = "http://localhost:8888/api/spotify/callback"

const scope = [
    'playlist-read-private', 
    'playlist-modify-private', 
    'playlist-modify-public',
    'user-read-email',
    'user-read-private',
    'user-library-read'
]

function generateRandomString(length) {
    return Math.random().toString(36).substr(2, length);
}

