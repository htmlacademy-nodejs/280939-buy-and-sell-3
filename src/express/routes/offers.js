'use strict';

const {Router} = require(`express`);

const {
  categoryTicketsListData,
  categoriesListData,
  selectedTicket,
} = require(`../../../templateData/bd.js`);

const OffersRouter = new Router();

OffersRouter.get(`/category`, (req, res) => res.render(`pages/category/category`, {
  categoryTicketsListData,
  categoriesListData,
})); // возможно нет такого роута - добавил чтобы пристроить одноименный шаблон
OffersRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
OffersRouter.get(`/add`, (req, res) => res.render(`pages/tickets/new-ticket`, {
  categoriesListData,
}));
OffersRouter.get(`/edit/:id`, (req, res) => res.render(`pages/tickets/ticket-edit`, {
  categoriesListData,
  selectedTicket,
}));
OffersRouter.get(`/:id`, (req, res) => res.render(`pages/tickets/ticket`));

module.exports = OffersRouter;
