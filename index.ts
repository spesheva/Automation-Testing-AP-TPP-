// let vs const
let number: number = 5;
number = 10;
console.log("10");

const message: string = 'Welcome';


// String
let welcomeMessage: string ="Hello, Rosi!";
let test: string = 'Rosi';

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