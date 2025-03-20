function greet(): void {
  console.log("Hello to functions!");
}

function multiplyNums(numberOne: number, numberTwo: number): number {
  return numberTwo * numberOne;
}

multiplyNums(2, 5);

function displayGreeting(
  firstName: String,
  lastName: string,
  age: number
): string {
  return `Hello, Mr ${lastName}, ${firstName}. You are ${age} years old.`;
}

const greeting: string = displayGreeting("Iwan", "Ivanov", 30);
console.log(greeting);

//displayPetInfo()

function displayPetinfo(name: string, animal: string, age?: number): string {
  return `${name} is  ${animal} ${age ? `Is ${age} years old.` : "."}`;
}

displayPetinfo("Spike", "dog");
displayPetinfo("Spike", "dog", 5);

console.log(displayPetinfo("Spike", "dog"));

function substractNumbers(
  firstNumber: number = 10,
  secondNumber: number = 5
): number {
  return firstNumber - secondNumber;
}

console.log(substractNumbers());
console.log(substractNumbers(20));
