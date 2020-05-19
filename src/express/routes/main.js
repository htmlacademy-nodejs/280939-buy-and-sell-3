'use strict';

const {Router} = require(`express`);

const newTicketsListData = require(`../../../templateData/newTicketsListData.json`);
const popularTicketsListData = require(`../../../templateData/popularTicketsListData.json`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`main/main`, {
  newTicketsListData,
  popularTicketsListData,
}));
MainRouter.get(`/register`, (req, res) => res.render(`main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`main/login`));

module.exports = MainRouter;
