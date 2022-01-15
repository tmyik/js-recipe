const fizzbuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100)

// switch(){
//     case (i % 3 === 0):
//         console.log("Fizz");
//     case (i % 5 === 0) :
//         console.log("Buzz");
//     case (i % 15 === 0) :
//     console.log("FizzBuzz");
//     default :
//     console.log(i);

// }
