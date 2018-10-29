const myName = 'John'.toLowerCase();

const myAge = 6;

const childhood = 2;

const childhoodFactor = 10.5;

const adulthood = myAge - childhood;

const adulthoodFactor = 4;

let earlyYears = childhood * childhoodFactor;

let laterYears = adulthood * adulthoodFactor;

let myAgeInDogYears = earlyYears + laterYears;

console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
