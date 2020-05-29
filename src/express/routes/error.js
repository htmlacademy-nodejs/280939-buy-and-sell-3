'use strict';

const {Router} = require(`express`);

const errorsRouter = new Router();

errorsRouter.get(``, (req, res) => {
  res.statusCode = 404;
  res.render(`pages/errors/404`);
});

module.exports = errorsRouter;
