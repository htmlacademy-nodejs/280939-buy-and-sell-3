'use strict';

const {Router} = require(`express`);

const {
  myTicketsListData
} = require(`../../../templateData/bd.js`);

const MyRouter = new Router();

MyRouter.get(`/`, (req, res) => res.render(`tickets/my-tickets`, {
  myTicketsListData,
}));
MyRouter.get(`/comments`, (req, res) => res.render(`tickets/comments`));

module.exports = MyRouter;
