'use strict';

const {Router} = require(`express`);

const {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
} = require(`../../../templateData/bd.js`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`main/main`, {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
}));
MainRouter.get(`/register`, (req, res) => res.render(`main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`main/login`));

module.exports = MainRouter;
