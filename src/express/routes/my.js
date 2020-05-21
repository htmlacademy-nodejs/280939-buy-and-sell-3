'use strict';

const {Router} = require(`express`);
const {getDataForCommentsPage} = require(`./utils/utils`);

const {
  myTicketsListData,
  usersData,
  commentsData,
} = require(`../../../templateData/bd.js`);

const MyRouter = new Router();

MyRouter.get(`/`, (req, res) => res.render(`tickets/my-tickets`, {
  myTicketsListData,
}));

MyRouter.get(`/comments`, (req, res) => res.render(`tickets/comments`, {
  ...getDataForCommentsPage({myTicketsListData, usersData, commentsData}),
}));

module.exports = MyRouter;
