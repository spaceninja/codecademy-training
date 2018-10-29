let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18;
let raceTime = ''

if(runnerAge > 18 && earlyRegistration) {
    raceNumber += 1000;
  raceTime = '9:30am';
} else if(runnerAge > 18 && !earlyRegistration) {
  raceTime = '11:00am';
} else if(runnerAge < 18) {
  raceTime = '12:30am';
} else {
  raceTime = 'SEE REGISTRATION DESK';
}

console.log(`Racer number ${raceNumber} is ${runnerAge} years old and ${earlyRegistration ? 'registered early' : 'did not register early'}, so they will race at ${raceTime}.`);
