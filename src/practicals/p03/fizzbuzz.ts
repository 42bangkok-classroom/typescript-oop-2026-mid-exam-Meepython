// Write your code below
const input:number = Number(process.argv[2])

if (Number.isNaN(input) || input === null || input <= 0) {
    
}

for (let index = 1; index <= input; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz")
  } else if (index % 3 === 0) {
    console.log("Fizz")
  } else if (index % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}
