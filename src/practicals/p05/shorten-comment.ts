export {}
//const comment = "TypeScript is a strongly typed programming language"
const comment = "aaaaa aaaaaaaaaa"
export function shortenComment(comment: string):string { 
  // Write your code below
  let stringArray:string[] = comment.split(" ")
  let result: string = ""
  let order:number = 0
  for (let index = 0; index < stringArray.length; index++) {
    if (stringArray[index].length <= 10 && stringArray[index].length >= 5) {
      if (order !== 1) {
        order++
        result = result + stringArray[index]
      } else {
        result = result + " " + stringArray[index]
      }
    } else {
      
    }
  }
  if (result === "") {
    return ""
  } else {
    return result
  }
}
