'use strict';

const dayjs = require(`dayjs`);

const formatDate = (date) => dayjs(date).format(`D MMMM YYYY`);

const prepareFieldData = (obj, field, func) => {
  const {[field]: targetValue, ...restData} = obj;
  return {
    ...restData,
    [field]: func(targetValue),
  };
};

const prepareObjectsData = (arr, field, func) => {
  return arr.map((obj) => prepareFieldData(obj, field, func));
};

module.exports = {
  formatDate,
  prepareObjectsData,
  prepareFieldData,
};
