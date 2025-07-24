//Higher order functions --> fuctions that can take other functions as a input.

function add(num1 , num2){
    return num1 + num2;
}
function sub(num1 , num2){
    return num1 - num2;
}
function multi(num1 , num2){
    return num1 * num2;
}
function divide(num1 , num2){
    return num1 / num2;
}
 

function calculator(num1 , num2 , operator){     // operator --> it is a parameter to add or call any function in this function 
    return operator(num1, num2);
}

console.log(calculator(2,6,add));      

// for checking how this function works or debugging the code in the chrome developer tools
// write debugger and press shift + enter and then write the function you want to debug.