'use strict';

const {Router} = require(`express`);
const {mainController, searchController} = require(`../controllers`);

const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => {
  if (req.query.search) {
    res.render(`pages/search/search-result`, searchController.getDataForSearchPage(req.query.search));
  } else {
    res.render(`pages/main/main`, mainController.getDataForMainPage());
  }
});
mainRouter.get(`/register`, (req, res) => res.render(`pages/main/sign-up`));
mainRouter.get(`/login`, (req, res) => res.render(`pages/main/login`));

module.exports = mainRouter;
