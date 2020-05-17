'use strict';

const {Router} = require(`express`);

const SearchRouter = new Router();

SearchRouter.get(`/`, (req, res) => res.render(`search/search-result`));

module.exports = SearchRouter;
