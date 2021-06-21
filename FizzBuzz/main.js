//  Challenge: FizzBuzz challenge As array
// Write a program that print number of 1 to 100 as a sequence and for multiples of 3 print "Fizz", for multiples of 5 print "Buzz" and for multiples of 3,5 print "FizzBuzz"

var output = [];
function fizzBuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
