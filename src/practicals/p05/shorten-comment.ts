const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string):string { 
  // Write your code below
  let stringArray:string[] = comment.split(" ")
  let result: string = ""
  let order:number = 0
  for (let index = 0; index < stringArray.length; index++) {
    if (stringArray[index].length <= 10 && stringArray[index].length >= 5) {
      //result.concat(stringArray[index])
      if (order !== 1) {
        order++
        result = result + stringArray[index]
      } else {
        result = result + " " + stringArray[index]
      }
    } else {
      return ""
    }
  }
  return result
}

shortenComment(comment)