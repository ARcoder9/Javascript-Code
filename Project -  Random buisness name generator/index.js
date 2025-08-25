/* Create a buisness name generator by combining list of adjectives and shop name and another word

Adjectives: 
Crazy 
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another words:
Bros
Limited
Hub

*/

//Method -- 1

// selecting the first word
var rand = Math.random()
if(rand < 0.33){
   first = "Crazy";
}
else if(rand>=0.33 && rand<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

// selecting second word
var rand = Math.random()
if(rand < 0.33){
   second = "Engine";
}
else if(rand>=0.33 && rand<0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

// selecting third word
var rand = Math.random()
if(rand < 0.33){
   third = "Bros";
}
else if(rand>=0.33 && rand<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`)


// method -- 2

let obj1 = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let obj3 = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

console.log(obj1[Math.floor(Math.random() * 3) + 1]);
console.log(obj2[Math.floor(Math.random() * 3) + 1]);
console.log(obj3[Math.floor(Math.random() * 3) + 1]);