const getSleepHours = day =>{
  switch (day){
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    default:
      return 7;
    
  }
}
// console.log(getSleepHours('tuesday'));
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7
}

// console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

// console.log(getIdealSleepHours()); // if idealHours is 8, should print 56


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed!");
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}
calculateSleepDebt();