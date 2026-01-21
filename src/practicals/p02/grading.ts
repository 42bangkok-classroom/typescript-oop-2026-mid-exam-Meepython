// Write your code below
const grade:number = Number(process.argv[2])

if (Number.isNaN(grade) || grade === null) {
  console.log("Invalid input")
}

if (grade < 0 || grade > 100) {
    console.log("Invalid input")
  }

if (grade >= 80) {
    console.log("Grade is A")
} else if (grade >= 70 && grade < 80) {
    console.log("Grade is B")
} else if (grade >= 60 && grade < 70) {
    console.log("Grade is C")
} else if (grade >= 50 && grade < 60) {
    console.log("Grade is D")
} else if (grade >=0 && grade < 50) {
    console.log("Grade is F")
} else {
    console.log("Invalid input")
}

