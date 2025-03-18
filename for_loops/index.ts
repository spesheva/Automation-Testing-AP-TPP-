// for... of loop

let fruits: string[] = ["Apple", "Banana", "Peach", "Watermelon"];
for (let fruit of fruits) {
  console.log(`Fruit is ${fruit}`);
}

// for .. of over array of numbers

let numbers: number[] = [10, 20, 30, 40];

for (let number of numbers) {
  if (number > 5) {
    console.log(`number is ${number}`);
  } else {
    console.log(`Number ${number} plus
   5 is ${number + 5}`);
  }
}

//for...of over strings

let message: string = "Hellow world!";
let welcomeMessage: string = "Welcome t Pesho! How t are you t?";
let modifiedMessage = welcomeMessage.replace("t", "");
//let modifiedMessage = welcomeMessage.replaceAll("t", "");

console.log(modifiedMessage);
// for (let letter of message) {
//   if (letter === "o") {
//     letter.replace("o", "@");
//   }
//   console.log("Letter", letter);
// }

//for ... in in over object

interface Student {
  name: string;
  lastName: string;
  age: number;
}

const student: Student = { name: "Pesho", lastName: "Petrov", age: 20 };

for (let key in student) {
  //accesing object key value by passing object key as keyof Student

  console.log(`${key}= ${student[key as keyof Student]}`);
}

// for... in over array

let numsArr: number[] = [35, 25, 45, 50];
for (let index in numsArr) {
  //accesing array value by passing array index
  //  console.log(`${index} = ${numsArr[index]}`);
}

//for loop

for (let i = 0; i <= 5; i++) {
  // console.log(`index ${i}`);
}
// for loop over array

let numbersArr: number[] = [35, 35, 45, 50, 35, 25, 45, 50, 35, 50];
for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] <= 35) {
    console.log(numbersArr[i]);
  } else {
    console.log(numbersArr[i] / 2);
  }
}

//for loop incrementation
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

export {};
