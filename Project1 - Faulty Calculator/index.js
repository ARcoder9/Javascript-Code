/* Create a faulty calculator using javascript

This faulty calculator does following:
1. It takes two numbers as inputs from the user.
2. It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times.

*/

const a = Math.random()*100 + 1;

if(a<=10){
   function sum(a , b){
    console.log (a - b);
   }

   function multiply(a , b){
    console.log(a + b);
   }

   function sub(a , b){
    console.log(a / b);
   }

   function divide(a, b){
    console.log(a ** b);
   }
}

else{
    function sum(a, b) {
      console.log(a + b);
    }

    function multiply(a, b) {
      console.log(a * b);
    }

    function sub(a, b) {
      console.log(a - b);
    }

    function divide(a, b) {
      console.log(a / b);
    }
}

sum (3 , 5);


const random = Math.random();
let a1 = prompt("Enter the first number");
let b1 = prompt("Enter the second number");
let c1 = prompt("Enter the operation");

let obj = {
  "+" : "-",
  "*" : "+",
  "-" : "/",
  "/" : "**"
}

if (random > 0.1){
  console.log(`the result is ${a} ${b} ${c}`);
  alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
  c = obj[c];
  console.log(`the result is ${a} ${b} ${c}`);
  alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}