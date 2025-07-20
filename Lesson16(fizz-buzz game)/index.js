// fizzbuzz game
// if the no. is divided by 3 replace it with the word "fuzz".
// and the no. is divided by 5 replace it with the word "buzz".
// and if the no. is divided by 3 and 5 replace it with word "fizzbuzz".


var output = [];       //making array
count = 1;             // setup counter

function fizzbuzz() {
  output.push(count);
  if (count % 3 == 0 && count % 5 == 0) {
    output.pop();                            // removing the last added element
    output.push("fizzbuzz");                 // adding the word to the end of the array or replacing it with the number.
  } else if (count % 3 == 0) {
    output.pop();
    output.push("fizz");
  } else if (count % 5 == 0) {
    output.pop();
    output.push("buzz");
  }
  count = count + 1;
  console.log(output);
}
