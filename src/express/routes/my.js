'use strict';

const {Router} = require(`express`);
const {getDataForCommentsPage} = require(`./utils/utils`);

const {
  myTicketsListData,
  usersData,
  commentsData,
} = require(`../../../templateData/bd.js`);

const MyRouter = new Router();

const currentUser = usersData.find((user) => user.id === `01`);

MyRouter.get(`/`, (req, res) => res.render(`pages/tickets/my-tickets`, {
  myTicketsListData,
  currentUser,
}));

MyRouter.get(`/comments`, (req, res) => res.render(`pages/tickets/comments`, {
  ...getDataForCommentsPage({myTicketsListData, usersData, commentsData}),
  currentUser,
}));

module.exports = MyRouter;
