'use strict';

const {Router} = require(`express`);

const {
  searchResults,
  newTicketsListData,
  categoriesListData,
} = require(`../../../templateData/bd.js`);

const SearchRouter = new Router();

SearchRouter.get(`/`, (req, res) => res.render(`pages/search/search-result`, {
  searchResults,
  newTicketsListData,
  categoriesListData,
  query: `Автомобиль`
}));

module.exports = SearchRouter;
