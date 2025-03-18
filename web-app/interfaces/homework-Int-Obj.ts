// 1. Create a TypeScript interface named Person that represents a 
// person with the following properties:
// • name (string)
// • lastName (string)
// • age (number)
// • email (string)
// • phoneNumber (number)


interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}


// . Create a TypeScript interface named PersonInfo that 
// Extends Person type from the previous exercise and add the 
// following properties:
// • country (optional string property)
// • greeting (optional method that return welcome message)

interface PersonInfo extends Person{
    country?: string;
    greeting?: () => string;
    }



// . Create an object of type Person using the interface from Exercise 1.
// Declare a variable person1 of type Person

const person1: Person = {

    name: "Ivan",
    lastName: "Ivanov",
    age: 39,
    email: "i.ivanov@gmail.com",
    phoneNumber: 359887454545,
}
console.log("Person1",Object.values(person1));

// . Create an object of type PersonInfo using the interface from 
// Exercise 2. Declare a variable person2 of type PersonInfo.

const person2: PersonInfo = {
    name: "Peter",
    lastName: "Petrov",
    age: 26,
    email: "p.petrov@gmail.com",
    phoneNumber: 359887123123,
    country: "Columbia",
    greeting: function () {
        return "Welcome!";
},
}


if(person2.greeting) {
     console.log(person2.greeting())
}