'use strict';

const {Router} = require(`express`);

const OffersRouter = new Router();

OffersRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
OffersRouter.get(`/add`, (req, res) => res.send(`/offers/add`));
OffersRouter.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id`));
OffersRouter.get(`/:id`, (req, res) => res.send(`/offers/:id`));

module.exports = OffersRouter;
