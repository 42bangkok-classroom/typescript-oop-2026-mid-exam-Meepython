export function getUniqueNumbers(arr1: number[], arr2: number[]): void { //number[]
  // Write your code below
  const newArray: number[] = [... new Set([...arr1, ...arr2])]
  console.log(newArray)
  
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

getUniqueNumbers(arr1, arr2)