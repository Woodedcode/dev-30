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

// // DOG YEARS
//constant age - human age
const myAge = 34;
//i guess this is multiplying it by two?
var earlyYears = 2;
//
earlyYears *= 10.5;
//later years of a dog 
let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
//combining earlyYears to laterYears to create dog years
myAgeInDogYears = earlyYears + laterYears;
// creating a variable for my name
var name = 'Ryan';
console.log(`my name is ${name}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)



// // MAGIC 8 BALL
//setting variable to empty string
var userName = 'Ryan';

userName ? console.log(`hello ${userName}`) : console.log('Hello')
let userQuestion = 'Can I do a magic trick?';
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

if (randomNumber === 0) {
    eightBall = 'It is certain'
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so'
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy, try again'
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now'
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it'
} else if (randomNumber === 5) {
    eightBall = 'My sources say no'
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good'
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes'
} else {
    console.log('The 8 Ball is cracked')
}

console.log(eightBall)



