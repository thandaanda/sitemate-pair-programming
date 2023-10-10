// expecting time to be a string in the format like '8:15' or '12:30'
const numberMaps = [
  { id: 0, text: 'zero' },
  { id: 1, text: 'one' },
  { id: 2, text: 'two' },
  { id: 3, text: 'three' },
  { id: 4, text: 'four' },
  { id: 5, text: 'five' },
  { id: 6, text: 'six' },
  { id: 7, text: 'seven' },
  { id: 8, text: 'eight' },
  { id: 9, text: 'nine' },
  { id: 10, text: 'ten' },
  { id: 11, text: 'eleven' },
  { id: 12, text: 'twelve' },
  { id: 13, text: 'thirteen' },
  { id: 14, text: 'fourteen' },
  { id: 15, text: 'fifteen' },
  { id: 16, text: 'sixteen' },
  { id: 17, text: 'seventeen' },
  { id: 18, text: 'eighteen' },
  { id: 19, text: 'nineteen' },
  { id: 20, text: 'twenty' },
  { id: 21, text: 'twenty-one' },
  { id: 22, text: 'twenty-two' },
  { id: 23, text: 'twenty-three' },
  { id: 24, text: 'twenty-four' },
  { id: 25, text: 'twenty-five' },
  { id: 26, text: 'twenty-six' },
  { id: 27, text: 'twenty-seven' },
  { id: 28, text: 'twenty-eight' },
  { id: 29, text: 'twenty-nine' },
  { id: 30, text: 'thirty' },
  { id: 31, text: 'thirty-one' },
  { id: 32, text: 'thirty-two' },
  { id: 33, text: 'thirty-three' },
  { id: 34, text: 'thirty-four' },
  { id: 35, text: 'thirty-five' },
  { id: 36, text: 'thirty-six' },
  { id: 37, text: 'thirty-seven' },
  { id: 38, text: 'thirty-eight' },
  { id: 39, text: 'thirty-nine' },
  { id: 40, text: 'forty' },
  { id: 41, text: 'forty-one' },
  { id: 42, text: 'forty-two' },
  { id: 43, text: 'forty-three' },
  { id: 44, text: 'forty-four' },
  { id: 45, text: 'forty-five' },
  { id: 46, text: 'forty-six' },
  { id: 47, text: 'forty-seven' },
  { id: 48, text: 'forty-eight' },
  { id: 49, text: 'forty-nine' },
  { id: 50, text: 'fifty' },
  { id: 51, text: 'fifty-one' },
  { id: 52, text: 'fifty-two' },
  { id: 53, text: 'fifty-three' },
  { id: 54, text: 'fifty-four' },
  { id: 55, text: 'fifty-five' },
  { id: 56, text: 'fifty-six' },
  { id: 57, text: 'fifty-seven' },
  { id: 58, text: 'fifty-eight' },
  { id: 59, text: 'fifty-nine' },
];

const numberToText = (id) => {
  const value = numberMaps.find((numberMap) => numberMap.id == id);
  return value.text;
};
function convertTimeToWords(time) {
  // TODO: real code goes here!

  const timeArray = time.split(':');

  const hours = parseInt(timeArray[0], 10);
  const minutes = parseInt(timeArray[1], 10);

  const hourInText = numberToText(hours);
  const minuteInText = numberToText(minutes);

  if (minutes === 0) {
    if (hours === 0) {
      return 'midnight';
    } else if (hours === 12) {
      return 'midday';
    } else {
      return `${hourInText} o'clock`;
    }
  } if (minutes === 15) {
    return `quarter past ${hourInText}`;
  } else if (minutes < 29) {
    return `${minuteInText} past ${hourInText}`;
  } else if (minutes === 30) {
    return `half past ${hourInText}`;
  } else if (minutes === 45) {
    return `quarter to ${numberToText(hours + 1)}`;
  } else {
    const previousMinutes = 60 - minutes;
    const nextHour = hours + 1;
    if (nextHour === 12) {
      return `${numberToText(previousMinutes)} to midday`;
    } else if (nextHour === 24) {
      return `${numberToText(previousMinutes)} to midnight`;
    }
    return `${numberToText(previousMinutes)} to ${numberToText(hours + 1)}`;
  }
}

module.exports = { convertTimeToWords };
