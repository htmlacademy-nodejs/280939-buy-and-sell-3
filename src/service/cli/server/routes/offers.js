'use strict';

const {Router} = require(`express`);
const {readFileAsync} = require(`../../../../utils/utils`);

const OffersRouter = new Router();

OffersRouter.get(``, async (req, res) => {
  try {
    const filePath = `${process.cwd()}/mocks.json`;
    const data = await readFileAsync(filePath);
    res.send(data[0]);
  } catch (err) {
    res.send([]);
  }
  return;
});

module.exports = OffersRouter;
