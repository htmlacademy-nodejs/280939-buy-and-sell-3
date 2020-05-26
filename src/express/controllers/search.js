'use strict';

const {
  newTicketsListData,
  categoriesListData,
  ticketsData,
} = require(`../../../templateData/bd.js`);

const getDataForSearchPage = (query) => {
  const searchResults = [];
  if (query.length) {
    const findedCategoriesIds = {};
    const lowerQuery = query.toLowerCase();

    categoriesListData.forEach((category) => {
      if (category.label.toLowerCase().includes(lowerQuery)) {
        findedCategoriesIds[category.id] = true;
      }
    });

    ticketsData.forEach((ticket) => {
      let hasInCategories = false;
      let hasInTitle = false;
      let hasInDescription = false;

      hasInCategories = ~~ticket.categories.find((categoryId) => findedCategoriesIds[categoryId]);

      if (!hasInCategories) {
        hasInTitle = ticket.title.toLowerCase().includes(lowerQuery);
      }
      if (!hasInTitle) {
        hasInDescription = ticket.description.toLowerCase().includes(lowerQuery);
      }

      if (hasInCategories || hasInTitle || hasInDescription) {
        searchResults.push(ticket);
      }
    });
  }

  return {
    data: {
      searchResults,
      newTicketsListData,
      categoriesListData,
    },
    query
  };
};

module.exports = {
  getDataForSearchPage,
};
