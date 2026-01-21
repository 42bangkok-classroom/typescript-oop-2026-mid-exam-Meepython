type Condition<T> = (item: T) => boolean;

interface Person {
  firstName?: string | null;
  lastName?: string | null;
  age: number;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

export function sortPersons(persons: Person[]): Person[] {
  //let filteredUsers = persons.filter(p => p.firstName !== "" && p.lastName !== "" && p.age !== null && p.age >= 100)
  let filteredUsers = persons.filter(p =>  p.firstName !== "" && p.lastName !== "" && p.age !== null && p?.age <= 100 && p?.age > 0)
  return filteredUsers
}
console.log(sortPersons(persons))