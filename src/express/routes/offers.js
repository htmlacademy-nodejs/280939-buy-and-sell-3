'use strict';

const {Router} = require(`express`);

const {
  categoriesListData,
  selectedTicket,
  usersData,
  commentsData,
} = require(`../../../templateData/bd.js`);

const {offersController} = require(`../controllers`);

const {
  prepareFieldData,
  formatDate
} = require(`./utils/utils`);

const offersRouter = new Router();

const currentUser = usersData.find((user) => user.id === `01`);

offersRouter.get(`/category`, (req, res) => res.render(`pages/category/category`, offersController.getDataForTicketsCategoryPage())); // возможно нет такого роута - добавил чтобы пристроить одноименный шаблон
offersRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
offersRouter.get(`/add`, (req, res) => res.render(`pages/tickets/new-ticket`, {
  categoriesListData,
  currentUser,
}));
offersRouter.get(`/edit/:id`, (req, res) => res.render(`pages/tickets/ticket-edit`, {
  categoriesListData,
  selectedTicket,
  currentUser,
}));
offersRouter.get(`/:id`, (req, res) => res.render(`pages/tickets/ticket`, {
  currentUser,
  selectedTicket: prepareFieldData(selectedTicket, `createdDate`, formatDate),
  usersData,
  categoriesListData,
  comments: commentsData[selectedTicket.color]
}));

module.exports = offersRouter;
