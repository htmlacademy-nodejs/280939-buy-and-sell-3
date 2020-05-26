'use strict';

const {
  newTicketsListData,
  popularTicketsListData,
  categoriesListData,
  usersData,
  ticketsData,
} = require(`../../../templateData/bd.js`);

const {
  getCategoriesListDataWithCount,
  getCurrentUser,
} = require(`./utils/utils`);

const getDataForMainPage = () => {
  return {
    data: {
      newTicketsListData,
      popularTicketsListData,
      categoriesListData: getCategoriesListDataWithCount({categoriesListData, ticketsData}),
    },
    currentUser: getCurrentUser(usersData, `01`),
  };
};

module.exports = {
  getDataForMainPage,
};
