'use strict';

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

module.exports = {
  getDataForCommentsPage,
};
