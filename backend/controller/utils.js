exports.GetMonthIndex = (month) => {
  if (month === "Jan") return 0;
  else if (month === "Feb") return 1;
  else if (month === "Mar") return 2;
  else if (month === "Apr") return 3;
  else if (month === "May") return 4;
  else if (month === "Jun") return 5;
  else if (month === "Jul") return 6;
  else if (month === "Aug") return 7;
  else if (month === "Sep") return 8;
  else if (month === "Oct") return 9;
  else if (month === "Nov") return 10;
  else if (month === "Dec") return 11;
};

exports.extractLength = (contestLength) => {
  const array = contestLength.split(":");
  const hour = parseInt(array[0]);
  const minute = parseInt(array[1]);
  const totalTime = hour * 60 + minute;
  return totalTime;
};
