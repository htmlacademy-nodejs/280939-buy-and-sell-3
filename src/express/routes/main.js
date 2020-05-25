'use strict';

const {Router} = require(`express`);
const {mainController} = require(`../controllers`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`pages/main/main`, mainController.getDataForMainPage()));
MainRouter.get(`/register`, (req, res) => res.render(`pages/main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`pages/main/login`));

module.exports = MainRouter;
