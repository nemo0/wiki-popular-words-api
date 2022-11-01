// Configure Express
import express from 'express';
const app = express();

// Configure Dotenv
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import { wordScraper } from './utils/scraper.js';

import cron from 'node-cron';

import wordRouter from './routes/word.js';

import swaggerUi from 'swagger-ui-express';

import { logger } from './utils/logger.js';

import fs from 'fs';
const swaggerFile = fs.readFileSync('swagger_output.json', 'utf-8');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// console.log(swaggerFile)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerFile)));

app.get('/', (req, res) => {
  res.status(200).json({
    message: '✅ API is running! ',
  });
  logger.log({
    level: 'info',
    message: 'Route /',
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
  console.log(`App listening on port ${PORT}!`);
  console.log('Docs available at /docs');
});
