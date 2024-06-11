import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import setlistRouter from './routes/setlist.js';


dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/setlist', setlistRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
