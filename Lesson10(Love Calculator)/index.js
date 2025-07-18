// Building a Love Calculator

prompt ("What is your name ?");
prompt ("What is your lover's name ?");

var n = Math.random() * 100;     // it helps to create random number between 0 to 99
var output = Math.floor(n) + 1;  // math.floor for round off and adding one it make range between 1 to 100
alert("your love score is " + output + "%");