'use strict';

const fs = require(`fs`);
const chalk = require(`chalk`);
const path = require(`path`);
const {exitCodes} = require(`../config/constants`);

const getRangomInteger = (min, max, noNeedRoundOff) => {
  if (!noNeedRoundOff) {
    min = Math.ceil(min);
    max = Math.floor(max);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeToFileAsync = async (pathToFile, name, content) => {
  const filePath = path.join(pathToFile, name);
  try {
    await fs.promises.writeFile(filePath, content, `utf8`);
    console.log(`Файл ${chalk.green(name)} был создан!`);
    console.log(`Расположение: ${chalk.cyan(path.resolve(filePath))}`);
  } catch (err) {
    console.log(chalk.red(err));
  }
};

const exit = (type) => {
  process.exit(exitCodes[type] || exitCodes.success);
};

const getRandomString = (arr) => {
  return arr[getRangomInteger(0, arr.length - 1)];
};

const getRandomStrings = (arr, maxArrLength) => {
  const shuffledArr = shuffle(arr);
  let shuffledArrLength = shuffledArr.length;

  if (!maxArrLength) {
    maxArrLength = arr.length;
    if (shuffledArrLength > maxArrLength) {
      shuffledArrLength = maxArrLength;
    }
  }

  const newArrLength = getRangomInteger(1, shuffledArrLength - 1);
  const res = shuffledArr.slice(0, newArrLength);

  return res;
};

const fixNumberFormat = (num) => {
  if (num.toString().length === 1) {
    return `0${num}`;
  }
  return num;
};

module.exports = {
  getRangomInteger,
  shuffle,
  writeToFileAsync,
  exit,
  getRandomString,
  getRandomStrings,
  fixNumberFormat,
};
