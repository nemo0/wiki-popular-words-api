import fs from 'fs';
// import words from '../words.json';

export const readWords = () => {
  const words = fs.readFileSync('words.json', 'utf-8');
  return JSON.parse(words);
};

const data = readWords();

const { words } = data;

export const findWords = (word) => {
  word = word.toLowerCase();
  try {
    return words.filter((item) => item.word === word);
  } catch (error) {
    console.log(error);
  }
};

export const findMultipleWords = (words) => {
  const wordsFound = [];
  try {
    words.forEach((word) => {
      word = word.toLowerCase();
      if (findWords(word).length > 0) {
        wordsFound.push(findWords(word));
      }
    });
    return wordsFound.length > 0 ? wordsFound : [];
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByPos = (pos) => {
  pos = pos.toLowerCase();
  try {
    return words.filter((item) => item.pos === pos);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByOecRank = (oecRank) => {
  oecRank = oecRank.toLowerCase();
  try {
    return words.filter((item) => item.oecRank === oecRank);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByCocaRank = (cocaRank) => {
  cocaRank = cocaRank.toLowerCase();
  try {
    return words.filter((item) => item.cocaRank === cocaRank);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByDolchLevel = (dolchLevel) => {
  dolchLevel = dolchLevel.toLowerCase();
  try {
    return words.filter((item) => item.dolchLevel === dolchLevel);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByPolysemy = (polysemy) => {
  polysemy = polysemy.toLowerCase();
  try {
    return words.filter((item) => item.polysemy === polysemy);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndPos = (word, pos) => {
  word = word.toLowerCase();
  pos = pos.toLowerCase();
  try {
    return words.filter((item) => item.word === word && item.pos === pos);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndOecRank = (word, oecRank) => {
  word = word.toLowerCase();
  oecRank = oecRank.toLowerCase();
  try {
    return words.filter(
      (item) => item.word === word && item.oecRank === oecRank
    );
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndCocaRank = (word, cocaRank) => {
  word = word.toLowerCase();
  cocaRank = cocaRank.toLowerCase();
  try {
    return words.filter(
      (item) => item.word === word && item.cocaRank === cocaRank
    );
  } catch (error) {
    console.log(error);
  }
};
