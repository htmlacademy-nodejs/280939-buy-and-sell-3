'use strict';

const chalk = require(`chalk`);
const {
  exit,
  getRangomInteger,
  fixNumberFormat,
  getRandomString,
  getRandomStrings,
  readFileAsync,
  writeToFileAsync,
} = require(`../../utils/utils`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const MAX_ITEMS_ALLOWED = 1000;

const getUserCount = (paramValueArr) => {
  const parsedCount = parseInt(paramValueArr[0], 10);

  if (isNaN(parsedCount)) {
    console.log(chalk.red(`Вы не указали параметры или они не валидны. Будет создана 1 запись.`));

    return DEFAULT_COUNT;
  } else if (parsedCount > MAX_ITEMS_ALLOWED) {
    console.log(chalk.red(`Возможно создать не больше ${MAX_ITEMS_ALLOWED} записей`));
    exit(`error`);
  }

  return parsedCount;
};

const getImageTitle = () => {
  const index = getRangomInteger(1, 16, true);
  return `item${fixNumberFormat(index)}.jpg`;
};

const generateMockData = async (count) => {
  const samples = await Promise.all([
    `type`,
    `title`,
    `description`,
    `category`,
  ].map((item) => readFileAsync(`src/samples/${item}.txt`)));

  const [
    typeSamples,
    titlesSamples,
    descriptionSamples,
    categorySamples,
  ] = samples;

  const data = Array(count)
    .fill({})
    .map(() => {
      const type = getRandomString(typeSamples);
      const title = getRandomString(titlesSamples);
      const description = getRandomStrings(descriptionSamples, 5).join(` `);
      const category = getRandomStrings(categorySamples);
      const sum = getRangomInteger(1000, 100000);
      const picture = getImageTitle();

      return {
        type,
        sum,
        picture,
        title,
        description,
        category,
      };
    });

  return data;
};

const run = async (input) => {
  const count = getUserCount(input);
  const content = await generateMockData(count);
  await writeToFileAsync(``, FILE_NAME, JSON.stringify(content));
  exit(`success`);
};

module.exports = {
  name: `--generate`,
  run
};

// run([1]); // for debugging
