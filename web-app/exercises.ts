// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 8000000,
  language: "BG",
};
const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  population: 5000000,
  language: "IT",
};
// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
// displays the details for it

function displayCountryDetail(country: Country): string {
  return `The capital of ${country.name} is ${country.capital}. 
  The official language is ${country.language} and population of ${country.population}
   people.`;
}
const detailsBulgariaCountry = displayCountryDetail(firstCountry);
console.log(detailsBulgariaCountry);

const detailsItalyCountry = displayCountryDetail(secondCountry);
console.log(detailsItalyCountry);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const student1: Student = {
  id: 15,
  name: "Ivan",
  age: 21,
  grade: 6,
};
const student2: Student = {
  id: 15,
  name: "Tosho",
  age: 35,
  grade: 4,
};
const student3: Student = {
  id: 15,
  name: "Pesho",
  age: 23,
  grade: 5,
};

// Step Three: Declare array "students" with objects of type "Student"

let studentsArr: Student[] = [student1, student2, student3];

studentsArr.map((student) => {
  if (student1.name === "Tosho") {
    student1.grade = 3;
  }
});
console.log(studentsArr);
console.log(student2);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}
const studentNames = getStudents(studentsArr);
console.log("studentNames", studentNames);
// Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
function sortStudents(students: String[]){
  return students.sort() ;
}
const studentNamesAsc = sortStudents(studentNames);

console.log("sortStudents", studentNamesAsc);


