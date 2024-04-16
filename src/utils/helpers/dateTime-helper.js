const moment = require("moment");

function compareTime(inputDate1, inputDate2) {
  const parsedDate1 = moment(inputDate1, "YYYY-MM-DD HH:mm:ss");
  const parsedDate2 = moment(inputDate2, "YYYY-MM-DD HH:mm:ss");

  return parsedDate1 < parsedDate2;
}

module.exports = {
  compareTime,
};



