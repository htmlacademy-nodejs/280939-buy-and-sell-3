'use strict';

const {
  categoryTicketsListData,
  categoriesListData,
  ticketsData,
  usersData,
} = require(`../../../templateData/bd.js`);

const {
  getCategoriesListDataWithCount,
  getCurrentUser,
} = require(`./utils/utils`);

const getDataForTicketsCategoryPage = () => {
  return {
    data: {
      categoryTicketsListData,
      categoriesListData: getCategoriesListDataWithCount({categoriesListData, ticketsData}),
    },
    currentUser: getCurrentUser(usersData, `01`),
  };
};

module.exports = {
  getDataForTicketsCategoryPage,
};
