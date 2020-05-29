'use strict';

const logger = require(`../../utils/logger`);
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
    logger.error(`Вы не указали параметры или они не валидны. Будет создана 1 запись.`);

    return DEFAULT_COUNT;
  } else if (parsedCount > MAX_ITEMS_ALLOWED) {
    logger.error(`Возможно создать не больше ${MAX_ITEMS_ALLOWED} записей`);
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

  for (const name in files) {
    if (files.hasOwnProperty(name)) {
      const [fileName, fileType] = files[name].split(`.`);
      try {
        samples[fileName] = await readFileAsync(path.join(PATH_TO_FILES, `${fileName}.${fileType}`));
      } catch (error) {
        if (error) {
          logger.error(error);
        }
      }
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

// run([10]); // for debugging
