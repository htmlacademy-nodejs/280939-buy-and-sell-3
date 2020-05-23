'use strict';

const dayjs = require(`dayjs`);
require(`dayjs/locale/ru`);
dayjs.locale(`ru`);

const getDataForCommentsPage = ({myTicketsListData, usersData, commentsData}) => {
  const ticketsDBData = [];
  const userIdsMap = [];
  Object.keys(commentsData).forEach((ticketId) => {
    const {color, label, title, price} = myTicketsListData.find((item) => item.color === ticketId);
    const ticketData = {
      color,
      label,
      title,
      price
    };
    ticketsDBData.push(ticketData);
    userIdsMap.push(...commentsData[ticketId].map((item) => item.userId));
  });

  const usersIds = new Set(userIdsMap);

  const usersDBData = Array.from(usersIds).map((id) => usersData.find((userItem) => userItem.id === id));

  return {
    ticketsDBData,
    usersDBData,
    commentsDBData: commentsData,
  };
};

const formatDate = (date) => dayjs(date).format(`D MMMM YYYY`);

const prepateFieldData = (obj, field, func) => {
  const {[field]: targetValue, ...restData} = obj;
  return {
    ...restData,
    [field]: func(targetValue),
  };
};

const prepareObjectsData = (arr, field, func) => {
  return arr.map((obj) => prepateFieldData(obj, field, func));
};

module.exports = {
  getDataForCommentsPage,
  formatDate,
  prepareObjectsData,
  prepateFieldData,
};
