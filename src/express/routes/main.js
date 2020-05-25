'use strict';

const {Router} = require(`express`);

const {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
  usersData,
} = require(`../../../templateData/bd.js`);

const MainRouter = new Router();

const currentUser = usersData.find((user) => user.id === `01`);

MainRouter.get(`/`, (req, res) => res.render(`pages/main/main`, {
  data: {
    newTicketsListData,
    popularTicketsListData,
    categoriesListData,
  },
  currentUser,
}));
MainRouter.get(`/register`, (req, res) => res.render(`pages/main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`pages/main/login`));

module.exports = MainRouter;
