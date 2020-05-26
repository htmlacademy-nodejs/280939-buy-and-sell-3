'use strict';

const {Router} = require(`express`);
const {mainController, searchController} = require(`../controllers`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => {
  if (req.query.search) {
    res.render(`pages/search/search-result`, searchController.getDataForSearchPage(req.query.search));
  } else {
    res.render(`pages/main/main`, mainController.getDataForMainPage());
  }
});
MainRouter.get(`/register`, (req, res) => res.render(`pages/main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`pages/main/login`));

module.exports = MainRouter;
