'use strict';

const {Router} = require(`express`);

const {
  categoryTicketsListData,
  categoriesListData,
  selectedTicket,
  usersData,
} = require(`../../../templateData/bd.js`);

const OffersRouter = new Router();

const currentUser = usersData.find((user) => user.id === `01`);

OffersRouter.get(`/category`, (req, res) => res.render(`pages/category/category`, {
  categoryTicketsListData,
  categoriesListData,
  currentUser,
})); // возможно нет такого роута - добавил чтобы пристроить одноименный шаблон
OffersRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
OffersRouter.get(`/add`, (req, res) => res.render(`pages/tickets/new-ticket`, {
  categoriesListData,
  currentUser,
}));
OffersRouter.get(`/edit/:id`, (req, res) => res.render(`pages/tickets/ticket-edit`, {
  categoriesListData,
  selectedTicket,
  currentUser,
}));
OffersRouter.get(`/:id`, (req, res) => res.render(`pages/tickets/ticket`, {
  currentUser,
}));

module.exports = OffersRouter;
