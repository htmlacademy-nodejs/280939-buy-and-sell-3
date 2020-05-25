'use strict';

const {Router} = require(`express`);

const {
  searchResults,
  newTicketsListData
} = require(`../../../templateData/bd.js`);

const SearchRouter = new Router();

SearchRouter.get(`/`, (req, res) => res.render(`pages/search/search-result`, {
  searchResults,
  newTicketsListData,
  query: `Автомобиль`
}));

module.exports = SearchRouter;
