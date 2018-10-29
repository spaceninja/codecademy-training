// today's forcast temperature in Kelvin
const kelvin = 0;

// convert from Kelvin to Celcius
const celcius = kelvin - 273;

// convert from Celcius to Farenheit
const farenheit = Math.floor(celcius * (9/5) + 32);

console.log(`The temperature is ${farenheit} degrees Farenheit.`);
