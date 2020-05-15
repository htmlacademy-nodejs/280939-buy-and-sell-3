'use strict';

const chalk = require(`chalk`);
const path = require(`path`);
const {
  exit,
  getRangomInteger,
  fixNumberFormat,
  getRandomString,
  getRandomStrings,
  readDirAsync,
  readFileAsync,
  writeToFileAsync,
  parseCommandParam,
} = require(`../../utils/utils`);
const {PATH_TO_FILES} = require(`../../config/constants`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const MAX_ITEMS_ALLOWED = 1000;

const getUserCount = (input) => {
  const parsedCount = parseCommandParam(input);

  if (isNaN(parsedCount)) {
    console.log(chalk.red(`Вы не указали параметры или они не валидны. Будет создана 1 запись.`));

    return DEFAULT_COUNT;
  } else if (parsedCount > MAX_ITEMS_ALLOWED) {
    console.log(chalk.red(`Возможно создать не больше ${MAX_ITEMS_ALLOWED} записей`));
    exit(`ERROR`);
  }

  return parsedCount;
};

const getImageTitle = () => {
  const index = getRangomInteger(1, 16, true);
  return `item${fixNumberFormat(index)}.jpg`;
};

const getSamples = async () => {
  const samples = {};

  const files = await readDirAsync(PATH_TO_FILES);

  const filesWithTypesMap = files.map((file) => file.split(`.`));

  filesWithTypesMap.forEach(([fileName, fileType]) => {
    samples[fileName] = readFileAsync(path.join(PATH_TO_FILES, `${fileName}.${fileType}`));
  });

  for (const key in samples) {
    if (samples[key]) {
      samples[key] = await samples[key];
    }
  }

  return samples;
};

const generateMockData = async (count) => {
  const samples = await getSamples();

  const data = Array(count)
    .fill({})
    .map(() => {
      const types = getRandomString(samples.types);
      const titles = getRandomString(samples.titles);
      const sentences = getRandomStrings(samples.sentences, 5).join(` `);
      const categories = getRandomStrings(samples.categories);
      const sum = getRangomInteger(1000, 100000);
      const picture = getImageTitle();

      return {
        types,
        sum,
        picture,
        titles,
        sentences,
        categories,
      };
    });

  return data;
};

const run = async (input) => {
  const count = getUserCount(input);
  const content = await generateMockData(count);
  await writeToFileAsync(``, FILE_NAME, JSON.stringify(content));
  exit(`SUCCESS`);
};

module.exports = {
  name: `--generate`,
  run
};

// run([1]); // for debugging
