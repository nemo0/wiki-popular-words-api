import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { wordScraper } from './scraper.js';

import cron from 'node-cron';

import wordRouter from './routes/word.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: '✅ API is running! ',
  });
});

app.use('/api', wordRouter);

cron.schedule('0 0 * * *', () => {
  try {
    wordScraper();
    console.log('Cron Ran Successfully!');
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
