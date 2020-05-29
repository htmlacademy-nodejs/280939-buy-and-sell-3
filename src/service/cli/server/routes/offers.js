'use strict';

const {Router} = require(`express`);
const {readFileAsync} = require(`../../../../utils/utils`);

const offersRouter = new Router();

offersRouter.get(``, async (req, res) => {
  try {
    const filePath = `${process.cwd()}/mocks.json`;
    const data = await readFileAsync(filePath);
    res.send(data[0]);
  } catch (err) {
    res.send([]);
  }
  return;
});

module.exports = offersRouter;
