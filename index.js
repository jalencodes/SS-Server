import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from'mongoose';

import setlistRouter from './routes/setlist.js';
import spotifyRouter from './routes/spotify.js';
import userRouter from './routes/user.js';


dotenv.config();
mongoose.connect(process.env.COMPASS_URI)

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/setlist', setlistRouter);
app.use('/api/spotify', spotifyRouter);
app.use('/api/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
