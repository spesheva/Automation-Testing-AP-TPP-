//1.	 Create an array of strings and add a new element at the end of the array. Log the result.

let bookGenre: string[] = ["Criminal", "Detective","Romance","Historical"];
bookGenre.push("Horror");

console.log("bookGenre", bookGenre);


//2.	Create an array of numbers and remove the first element from the array. Log the result.

let numberArray: number[] = [15,20,25,30,35];
// numberArray.pop();
numberArray.shift()

console.log("numberArray", numberArray);

//3.	 Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let baseNumArr: number []= [1,2,3,4,5];
// function numdivision(element:number) :number {
//     return element/2;    
// }
// let mapedNumArrFunc = baseNumArr.map(numdivision);
// console.log("mapedNumArrFunc",mapedNumArrFunc);

// let mappedNumArr = baseNumArr.map((element:number) => element/2);
let mappedNumArr:number []  = baseNumArr.map(num => num/2)
 console.log("mappedNumArr", mappedNumArr);


//4.	 Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let noFilteredNumArr: number [] = [3, 7, 1, 9, 12, 4];
// let filteredNumArr= noFilteredNumArr.filter((element: number) => (element > 5 ? element : 0));
// console.log("filteredNumArr", filteredNumArr);

// function compareNumbers(element:number) :number {
//     if (element > 5){
//          return element;
//     }else{
//         return 0;
//     }      
// }
// let compareFilterNumArr = noFilteredNumArr.filter(compareNumbers);
let compareFilterNumArr = noFilteredNumArr.filter(num=> num>5);
console.log("compareFilterNumArr",compareFilterNumArr);

//5.	Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let unSortArrNum: number [] = [9, 3, 7, 2, 8, 5] ;

let sortArrNum = unSortArrNum.sort();

console.log("sortArrNum",sortArrNum);


//6.	Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let fruitArr: string [] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log("fruitArr", fruitArr.slice(0,3));

//7.	Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let vehiclesArr: string [] = ['car', 'bike', 'bus', 'train', 'boat'];
let partVehArr = vehiclesArr.splice(1,2);
console.log("partVehArr",vehiclesArr);



//8.	Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. 
// Use if/else statement to find the largest number. Log the result.

function findLargest(min: number, middle: number, largest: number) :number{

    if (min >= middle && min >= largest) {
        return min;
    } else if (middle >= min && middle >= largest) {
        return middle;
    } else {
        return largest;
    }

}

let largestNum: number = findLargest(3,1,2);
console.log("largestNum",largestNum);

// 9.	Write a function “convertToCentimeters”  which receives parameter “inches” 
// and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number=1) :number{
          return inches*2.54;
}
let inchToCmConversion: number = convertToCentimeters();
console.log(`The default value for inch in function convertToCentimeters is 1, for that 1 inch is ${inchToCmConversion} cm.`);
let inches: number = 10;
inchToCmConversion = convertToCentimeters(inches);
console.log(`${inches} inch are ${inchToCmConversion} cm.`);



// 10.	Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
//  If height is not provided, assume the shape is a square.

function calculateArea( width: number, height?: number): number{

    if(height !== undefined){
        return width * height;
    }else {
       return  width*width;
    }

}
let area: number = calculateArea(4);
console.log(`The area of a square is ${area}`);

area = calculateArea(4,2);
console.log(`The area of a rectangle is ${area}`);