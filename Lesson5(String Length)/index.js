// var tweet = prompt("write your tweet here!!!")
// var tweet_count = tweet.length;

// alert("you have written " + tweet_count + " Characters you have " + (140 - tweet_count) + " Characters remaining");



var name = "Ayush";
var ans = name.slice(0,1)  // it helps to slice the character from the string 
console.log(ans);     // if you want to know how many character you will get formula is Upper_bound - Lower_bound

console.log(name.toUpperCase());   // to change the string to Uppercase
console.log(name.toLowerCase());   // to change the string to Lowercase

// Challenge Question:- only the first letter of the input name is capitalize

var name1 = prompt("What is your name?")
alert(name.slice(0,1).toUpperCase() + name1.slice(1,name1.length).toLowerCase());  // my approach:-  first slice the fist character of the name
                                                                     // made it capitalize and then concatinate the rest of the character 
                                                                     // there is edge case where if user write first letter in lowercase but
                                                                     // rest of the character in uppercase so make rest of the character to lowercase
                                                                     // to eliminate that use case.