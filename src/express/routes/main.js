'use strict';

const {Router} = require(`express`);

const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`main/main`));
MainRouter.get(`/register`, (req, res) => res.render(`main/sign-up`));
MainRouter.get(`/login`, (req, res) => res.render(`main/login`));

module.exports = MainRouter;
