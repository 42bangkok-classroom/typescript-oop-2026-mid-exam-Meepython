// Write your code below
const size:number = Number(process.argv[2])

if (Number.isNaN(size) || size === null || size <= 0) {
    process.exit(0)
}

let order:number = 0

// Row /

for (let i = size; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}