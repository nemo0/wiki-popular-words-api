import express from 'express';
import {
  findWords,
  findWordsByCocaRank,
  findWordsByDolchLevel,
  findWordsByOecRank,
  findWordsByPolysemy,
  findWordsByPos,
  findWordsByWordAndCocaRank,
  findWordsByWordAndOecRank,
  findWordsByWordAndPos,
} from '../reader.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: '✅ API is running! ',
  });
});

router.post('/find/word', async (req, res) => {
  const { word } = req.body;
  const wordDetails = findWords(word);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: '✅ Word found!',
      wordDetails,
    });
  }
});

router.post('/find/pos', async (req, res) => {
  const { pos } = req.body;
  const wordDetails = findWordsByPos(pos);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Words not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Words found with POS ${pos}!`,
      wordDetails,
    });
  }
});

router.post('/find/oecRank', async (req, res) => {
  const { oecRank } = req.body;
  const wordDetails = findWordsByOecRank(oecRank);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with OEC Rank ${oecRank}!`,
      wordDetails,
    });
  }
});

router.post('/find/cocaRank', async (req, res) => {
  const { cocaRank } = req.body;
  const wordDetails = findWordsByCocaRank(cocaRank);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with COCA Rank ${cocaRank}!`,
      wordDetails,
    });
  }
});

router.post('/find/dolchLevel', async (req, res) => {
  const { dolchLevel } = req.body;
  const wordDetails = findWordsByDolchLevel(dolchLevel);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with Dolch Level ${dolchLevel}!`,
      wordDetails,
    });
  }
});

router.post('/find/polysemy', async (req, res) => {
  const { polysemy } = req.body;
  const wordDetails = findWordsByPolysemy(polysemy);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with Polysemy ${polysemy}!`,
      wordDetails,
    });
  }
});

router.post('/find/wordAndPos', async (req, res) => {
  const { word, pos } = req.body;
  const wordDetails = findWordsByWordAndPos(word, pos);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with Word ${word} and POS ${pos}!`,
      wordDetails,
    });
  }
});

router.post('/find/wordAndOecRank', async (req, res) => {
  const { word, oecRank } = req.body;
  const wordDetails = findWordsByWordAndOecRank(word, oecRank);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with Word ${word} and OEC Rank ${oecRank}!`,
      wordDetails,
    });
  }
});

router.post('/find/wordAndCocaRank', async (req, res) => {
  const { word, cocaRank } = req.body;
  const wordDetails = findWordsByWordAndCocaRank(word, cocaRank);

  if (wordDetails.length === 0) {
    res.status(404).json({
      message: '❌ Word not found!',
    });
  } else {
    res.status(200).json({
      message: `✅ Word found with Word ${word} and COCA Rank ${cocaRank}!`,
      wordDetails,
    });
  }
});

export default router;
