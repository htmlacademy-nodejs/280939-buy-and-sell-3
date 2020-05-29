'use strict';

const mainRouter = require(`./routes/main`);
const myRouter = require(`./routes/my`);
const offersRouter = require(`./routes/offers`);
const errorsRouter = require(`./routes/error`);

module.exports = {
  "/": mainRouter,
  "/my": myRouter,
  "/offers": offersRouter,
  "*": errorsRouter,
};
