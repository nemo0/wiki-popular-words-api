import fs from 'fs';
// import words from '../words.json';

export const readWords = () => {
  const words = fs.readFileSync('words.json', 'utf-8');
  return JSON.parse(words);
};

const data = readWords();

const { words } = data;

export const findWords = (word) => {
  try {
    return words.filter((item) => item.word === word);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByPos = (pos) => {
  try {
    return words.filter((item) => item.pos === pos);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByOecRank = (oecRank) => {
  try {
    return words.filter((item) => item.oecRank === oecRank);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByCocaRank = (cocaRank) => {
  try {
    return words.filter((item) => item.cocaRank === cocaRank);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByDolchLevel = (dolchLevel) => {
  try {
    return words.filter((item) => item.dolchLevel === dolchLevel);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByPolysemy = (polysemy) => {
  try {
    return words.filter((item) => item.polysemy === polysemy);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndPos = (word, pos) => {
  try {
    return words.filter((item) => item.word === word && item.pos === pos);
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndOecRank = (word, oecRank) => {
  try {
    return words.filter(
      (item) => item.word === word && item.oecRank === oecRank
    );
  } catch (error) {
    console.log(error);
  }
};

export const findWordsByWordAndCocaRank = (word, cocaRank) => {
  try {
    return words.filter(
      (item) => item.word === word && item.cocaRank === cocaRank
    );
  } catch (error) {
    console.log(error);
  }
};
