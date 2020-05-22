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
SearchRouter.get(`/empty`, (req, res) => res.render(`pages/search/search-result--empty`, {
  newTicketsListData,
  query: `Балалайка`
}));

module.exports = SearchRouter;
