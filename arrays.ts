//Arrys
let numberArray: number[] = [1, 2, 3, 4];
let stingAndNumsArr: (string | number)[] = ["Pesho", "Gosho", 15, "3"];

let fruits: string[] = ["Apple", "Banana", "Pear", "Peach", "Grape"];
let firstEl: string = fruits[1];
let secondEL: string = fruits[3];
fruits.push("Mango");
console.log("fruits", fruits);

numberArray.pop();
console.log("numberArray", numberArray);
fruits.shift();
console.log("fruits shift", fruits);

numberArray.unshift(5);
console.log(numberArray);

console.log(fruits.slice(1, 4));

let multiplyNumbers = numberArray.map((element: number) => element * 2);

let multipluSprcialNumbers = numberArray.map((element: number) => {
  if (element > 2) {
    return element * 2;
  } else {
    return element;
  }
});

console.log("multiplyNumber", multiplyNumbers);
console.log("multiplySpecialNumber", multipluSprcialNumbers);

let filterNumsArray = numberArray.filter((element) => element > 2);
console.log("filterNumsArray", filterNumsArray);
