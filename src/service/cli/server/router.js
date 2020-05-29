'use strict';

const offersRouter = require(`./routes/offers`);
const errorsRouter = require(`./routes/error`);

module.exports = {
  "/offers": offersRouter,
  "*": errorsRouter,
};
