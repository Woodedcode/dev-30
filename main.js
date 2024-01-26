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



// //RACE DAY
// let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let runnerAge = 18

if (registerEarly && runnerAge > 18) {
    raceNumber += 1000
}

if (registerEarly && runnerAge > 18){
    console.log(`Adults run at 9:30 am and your race number is ${raceNumber}`)
} else if (!registerEarly && runnerAge > 18) {
    console.log(`Late Adults run at 11:00 am and your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
    console.log(`Youth run at 12:30 am and your race number is ${raceNumber}`)
} else {
    console.log('PLEASE REGISTER')
}


// // ROCK, PAPER, SCISSORS EXERCISE

    const getUserChoice = userInput => {
       userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
            return userInput;
        } else {
            console.log('please select rock, paper, or scissors');
        }
    }

const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random() * 3)
     switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
     }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'GAME IS A TIE'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!"
        } else {
            return 'You won!'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won'
        } else {
            return 'You won!'
        }
    }

    if (userChoice === 'scissors'){
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!'
        } else {
            console.log('You won!')
        }
    }

    if (userChoice === 'bomb') {
        return 'YOU WON!'
    }
}


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`you threw ${userChoice}`)
    console.log(`computer threw ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice))
}   

playGame()
