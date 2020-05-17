'use strict';

const {Router} = require(`express`);

const OffersRouter = new Router();

OffersRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
OffersRouter.get(`/add`, (req, res) => res.render(`tickets/new-ticket`));
OffersRouter.get(`/edit/:id`, (req, res) => res.render(`tickets/ticket-edit`));
OffersRouter.get(`/:id`, (req, res) => res.render(`tickets/ticket`));

module.exports = OffersRouter;
