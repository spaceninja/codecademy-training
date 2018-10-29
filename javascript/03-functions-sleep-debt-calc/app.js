const getSleepHours = day => {
  switch(day) {
    case 'sunday':
      return 7;
      break;
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5.5;
      break;
    case 'wednesday':
      return 6.5;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 9;
      break;
    default:
      return 'error';
  }
}

const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} more sleep than ideal.`)
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} less sleep than ideal.`)
  }
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt();
