'use strict';

const {Router} = require(`express`);
const {myController} = require(`../controllers`);

const {
  myTicketsListData,
  usersData,
  commentsData,
  categoriesListData,
} = require(`../../../templateData/bd.js`);

const myRouter = new Router();

const currentUser = usersData.find((user) => user.id === `01`);

myRouter.get(`/`, (req, res) => res.render(`pages/tickets/my-tickets`, {
  myTicketsListData,
  currentUser,
  categoriesListData,
}));

myRouter.get(`/comments`, (req, res) => res.render(`pages/tickets/comments`, {
  ...myController.getDataForCommentsPage({myTicketsListData, usersData, commentsData}),
  currentUser,
}));

module.exports = myRouter;
