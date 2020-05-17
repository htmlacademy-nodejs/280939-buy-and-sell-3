'use strict';

const MainRouter = require(`./routes/main`);
const MyRouter = require(`./routes/my`);
const OffersRouter = require(`./routes/offers`);
const SearchRouter = require(`./routes/search`);
const ErrorsRouter = require(`./routes/error`);

module.exports = {
  "/": MainRouter,
  "/my": MyRouter,
  "/offers": OffersRouter,
  "/search": SearchRouter,
  "*": ErrorsRouter,
};
