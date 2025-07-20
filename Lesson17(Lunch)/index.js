//    Who's Buying Lunch? Code Challenge
//    You are going to write a function which will select a random name from a list of names. 
//    The person selected will have to pay for everybody's food bill.

function whosPaying(names) {

  var totalPerson = names.length;
  var index = Math.floor(Math.random() * totalPerson);
  var random_person = names[index];
  return random_person + " is going to buy lunch today!";

}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));