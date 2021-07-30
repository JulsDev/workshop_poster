const monthValue = {
  'Jan': 1,
  'Feb': 2,
  'Mar': 3,
  'Apr': 4,
  'May': 5,
  'Jun': 6,
  'Jul': 7,
  'Aug': 8,
  'Sep': 9,
  'Oct': 10,
  'Nov': 11,
  'Dec': 12,
};

const sortDate = function(stringArray) {
  let dateObjectArray = [];
  const result = [];

  // to create an array of object
  for (let i = 0; i < stringArray.length; ++i) {
    const curItem = stringArray[i];

    let [dayInfo, year] = curItem.split(', ');
    let [month, day] = dayInfo.split(' ');

    dateObjectArray.push({
      day,
      month: monthValue[month],
      year
    })
  }

  // to sort an array of objects
  dateObjectArray.sort((a, b) => a.day - b.day);
  dateObjectArray.sort((a, b) => a.month - b.month);
  dateObjectArray.sort((a, b) => a.year - b.year);

  // to create an array of string
  for (let item of dateObjectArray) {
    const monthString = Object.keys(monthValue).find(key => monthValue[key] == item.month);
    const newString = `${monthString} ${item.day}, ${item.year}`;
    result.push(newString);
  }

  return result;
}

export default sortDate;
