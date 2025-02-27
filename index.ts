// let vs const
let number: number = 5;
number = 10;
console.log("10");

const message: string = 'Welcome';


// String
let welcomeMessage: string ="Hello, Typescript!";
let test: string = 'text';

let welcomeMessageLength = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);

// String interpolation
let welcomeMessageDetails: string = `My welcome message length is ${welcomeMessageLength}`;
let userWelcomeMessage: string = `Welcome, ${test}`;
console.log(welcomeMessageLength);

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

//Number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;

// Boolean (true/false)

let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean= firstNumber >= secondNumber;
let isLowerOrEqual: boolean= firstNumber <= secondNumber;

let areNumberaEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnynumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;


//Any
let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 ===10;
stringValue = [10, 20, 30];

console.log("isGreater", isGreater);
console.log("isLower", isLower);
console.log("isEqual", isEqual);
console.log("isGreaterOrEqual", isGreaterOrEqual);
console.log("areNumberEqualTo", areNumberaEqualTo);
console.log("isAnyNumberEqualTo", isAnynumberEqualTo);

const isPositiveNum  = 5 >0 ? "The number is positive" : "The number is negative";

console.log(typeof isPositiveNum);//type of variable

const age: number =30;
const myName: string = "Pesho";
const personDescription: string = age < 40
? `${myName} is younger than 40. He is  ${age} years old.`
: `${myName} is older than 40. He is ${age} years old.'`;

const personName: string = `His name is "${myName}".`;

const tests: string = myName.length > 10
? "Text is grater than 10" 
: "Text is not grater than 10"

console.log("personDescription", personDescription);

//If Else Statement

if (age<40){
    console.log("Age are lower than 40");
    }else {
        console.log("Age are grater than 40");
    }

    const num: number = 100;

    if (num <= 10){
         console.log("The number is lawer than 10")

    }else if(num > 80){
         console.log("The number is greater than 80")
}
    else if(num >=100){
         console.log("The number is greater than 100")

    }else{
        console.log("The number is between 10 and 100")
    }

    //Type Alias

    type personInfoType = string|number;

    const personNameInfo: personInfoType = "Ivan";
    const personAgeInfo: personInfoType = 15;
