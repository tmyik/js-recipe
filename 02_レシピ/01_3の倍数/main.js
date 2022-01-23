const numCount = function (number) {
  for (let i = 1; i <= number; i++) {
    // let char = i + ""
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (String(i).includes("3")) {
      console.log("3が入っちゃう元気")
    } else {
      console.log(i)
    }
  }
}

numCount(40)
