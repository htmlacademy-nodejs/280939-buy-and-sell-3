'use strict';

const {HTTP_CODES} = require(`../../../config/constants`);
const {writeHead, readFileAsync} = require(`../../../utils/utils`);

const {
  HTTP_SUCCESS_CODE,
  HTTP_NOT_FOUND_CODE,
} = HTTP_CODES;

const getDefaultRoute = (res, message) => {
  writeHead(res, HTTP_NOT_FOUND_CODE, `text/plain`);
  res.end(message || `Не повезло, :(`);
};

const getBaseRoute = async (res) => {
  const filePath = `${process.cwd()}/mocks.json`;
  let data;
  let jsonData;
  try {
    data = await readFileAsync(filePath, true);
    jsonData = JSON.parse(data);
  } catch (err) {
    if (err) {
      return getDefaultRoute(res);
    }
  }

  if (jsonData.length) {
    const template = [];
    template.push(`<ul>\n`);
    for (const item of jsonData) {
      template.push(`<li>${item.titles}</li>\n`);
    }
    template.push(`</ul>`);
    writeHead(res, HTTP_SUCCESS_CODE);
    return res.end(template.join(``));
  } else {
    return getDefaultRoute(res, `Not found`);
  }
};

module.exports = {
  '/': getBaseRoute,
  "default": getDefaultRoute,
};
