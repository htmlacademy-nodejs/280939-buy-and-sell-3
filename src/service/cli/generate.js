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
} = require(`../../utils/utils`);

const DEFAULT_COUNT = 1;
const pathToFiles = path.join(process.cwd(), `src`, `samples`);
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

const getSamples = async () => {
  const samples = {};

  const files = await readDirAsync(pathToFiles);

  const filesWithTypesMap = files.map((file) => file.split(`.`));

  filesWithTypesMap.forEach(([fileName, fileType]) => {
    samples[fileName] = readFileAsync(path.join(pathToFiles, `${fileName}.${fileType}`));
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
      const type = getRandomString(samples.type);
      const title = getRandomString(samples.title);
      const description = getRandomStrings(samples.description, 5).join(` `);
      const category = getRandomStrings(samples.category);
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
