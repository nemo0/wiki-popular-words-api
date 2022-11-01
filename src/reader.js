import fs from 'fs';
// import words from '../words.json';

//  Write a function to read the words.json file in one level up directory
export const readWords = () => {
  const words = fs.readFileSync('words.json', 'utf-8');
  return JSON.parse(words);
};

const allWords = readWords();

//  Write a function to find the words in the words.json file
export const findWords = (word) => {
  const words = allWords;
  return words.filter((item) => item.word === word);
};

//  Write a function to find the words in the words.json file
export const findWordsByPos = (pos) => {
  const words = allWords;
  return words.filter((item) => item.pos === pos);
};

//  Write a function to find the words in the words.json file
export const findWordsByOecRank = (oecRank) => {
  const words = allWords;
  return words.filter((item) => item.oecRank === oecRank);
};

//  Write a function to find the words in the words.json file
export const findWordsByCocaRank = (cocaRank) => {
  const words = allWords;
  return words.filter((item) => item.cocaRank === cocaRank);
};

//  Write a function to find the words in the words.json file
export const findWordsByDolchLevel = (dolchLevel) => {
  const words = allWords;
  return words.filter((item) => item.dolchLevel === dolchLevel);
};

//  Write a function to find the words in the words.json file
export const findWordsByPolysemy = (polysemy) => {
  const words = allWords;
  return words.filter((item) => item.polysemy === polysemy);
};

//  Write a function to find the words in the words.json file
export const findWordsByWordAndPos = (word, pos) => {
  const words = allWords;
  return words.filter((item) => item.word === word && item.pos === pos);
};

//  Write a function to find the words in the words.json file
export const findWordsByWordAndOecRank = (word, oecRank) => {
  const words = allWords;
  return words.filter((item) => item.word === word && item.oecRank === oecRank);
};

//  Write a function to find the words in the words.json file
export const findWordsByWordAndCocaRank = (word, cocaRank) => {
  const words = allWords;
  return words.filter(
    (item) => item.word === word && item.cocaRank === cocaRank
  );
};
