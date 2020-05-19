'use strict';

const {Router} = require(`express`);

const newTicketsListData = require(`../../../templateData/newTicketsListData.json`);
const searchResults = require(`../../../templateData/searchResults.json`);

const SearchRouter = new Router();

SearchRouter.get(`/`, (req, res) => res.render(`search/search-result`, {
  searchResults,
  newTicketsListData
}));

module.exports = SearchRouter;
