'use strict';

const {Router} = require(`express`);

const {
  searchResults,
  newTicketsListData
} = require(`../../../templateData/bd.js`);

const SearchRouter = new Router();

SearchRouter.get(`/`, (req, res) => res.render(`search/search-result`, {
  searchResults,
  newTicketsListData
}));
SearchRouter.get(`/empty`, (req, res) => res.render(`search/search-result--empty`, {
  newTicketsListData
}));

module.exports = SearchRouter;
