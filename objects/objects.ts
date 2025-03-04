type Role = {
  role: "manager" | "founder";
};
type Permissions = {
  permissions: "admin" | "user";
};
type User = Role & Permissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};

console.log("UserObject", user);

interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "Dog",
  age: 12,
  weight: 20,
  name: " Gringo",
  breed: "Frenchie",
};
console.log("animal", animal);

interface Cars {
  color: string;
  wheels: number;
  transmission: "manual" | "automatic";
  fuelType: "diesel" | "petrol";
  startEngine: () => string;
}

const car: Cars = {
  color: "white",
  wheels: 4,
  transmission: "manual",
  fuelType: "diesel",
  startEngine: function () {
    return "Start the engine";
  },
};
console.log(car);

//get object keys
const keys = Object.keys(car);
console.log("keys", keys);

//get object values

const values = Object.values(car);
console.log("values", values);

//assign two object in one

const colorObj = { color: "black" };
const backgroundObj = { background: "white" };

const assignObj = Object.assign({}, colorObj, backgroundObj);
export {};
