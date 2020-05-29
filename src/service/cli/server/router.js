'use strict';

const OffersRouter = require(`./routes/offers`);
const ErrorsRouter = require(`./routes/error`);

module.exports = {
  "/offers": OffersRouter,
  "*": ErrorsRouter,
};
