'use strict';

const {Router} = require(`express`);

const ErrorsRouter = new Router();

ErrorsRouter.get(``, (req, res) => {
  res.statusCode = 404;
  res.render(`pages/errors/404`);
});

module.exports = ErrorsRouter;