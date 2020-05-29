'use strict';

const {Router} = require(`express`);

const ErrorsRouter = new Router();

ErrorsRouter.get(``, (req, res, next) => {
  res.status(404);
  next();
});

module.exports = ErrorsRouter;
