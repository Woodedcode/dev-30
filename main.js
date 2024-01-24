// //PROJECT EXERCISE
//Setting Kelvin at a constant variable
const kelvin = 0;
//Converting Kelvin to celsius
var celsius = kelvin - 273;
//converting to the newton scale
var newton = celsius * (33/100)
// takes newton variable and round it down
newton = Math.floor(newton)
//Converting celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//Rounding down for fahrenheit
fahrenheit = Math.floor(fahrenheit)


//console.log
console.log(`The ${fahrenheit} degrees Fahrenheit`)
console.log(`The ${newton} degrees Newton`)
