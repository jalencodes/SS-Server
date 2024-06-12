import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const setlist_fm_key = process.env.SETLIST_FM_API_KEY;
const header = {'x-api-key': setlist_fm_key, 'Accept': 'application/json'}
const baseURL = 'https://api.setlist.fm/rest/1.0/'


export async function searchArtist(artistName)
{
    try
    {
        let queryReadyName  = artistName.replace(' ', '+')
        let requestURL      = `${baseURL}search/artists?artistName=${queryReadyName}&sort=relevance`
        const response      = await axios.get(requestURL, {headers:header})
        const artists       = response.data.artist
        return artists;
    }
    catch (error) {
        console.log(error);
    }
}

