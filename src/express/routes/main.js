'use strict';

const {Router} = require(`express`);

const {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
} = require(`../../../templateData/bd.js`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`pages/main/main`, {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
}));
MainRouter.get(`/register`, (req, res) => res.render(`pages/main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`pages/main/login`));

module.exports = MainRouter;
