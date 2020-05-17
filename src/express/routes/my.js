'use strict';

const {Router} = require(`express`);

const MyRouter = new Router();

MyRouter.get(`/`, (req, res) => res.render(`tickets/my-tickets`));
MyRouter.get(`/comments`, (req, res) => res.send(`my/comments`));

module.exports = MyRouter;
