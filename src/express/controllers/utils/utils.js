'use strict';

const getCategoriesListDataWithCount = ({ticketsData, categoriesListData}) => {
  const categoriesCount = {};
  ticketsData.forEach((ticket) => {
    ticket.categories.forEach((categoryId) => {
      if (!categoriesCount[categoryId]) {
        categoriesCount[categoryId] = [];
      }
      categoriesCount[categoryId].push(null);
    });
  });
  categoriesListData.forEach((category) => {
    // добавляю поле в исходный массив категорий
    if (categoriesCount[category.id]) {
      category.count = categoriesCount[category.id].length;
    } else {
      category.count = 0;
    }
  });
  return categoriesListData;
};

const getCurrentUser = (usersData, id) => usersData.find((user) => user.id === id);

module.exports = {
  getCategoriesListDataWithCount,
  getCurrentUser,
};
