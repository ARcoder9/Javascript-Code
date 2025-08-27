var a = prompt("write the number")
let arr = []
if(a==0){
    alert(`The factorial of the number ${a}! is 0`);
}
else{
for(let i = 0; i<a; i++){
    arr.push(a-i);
}

const fact = (a,b)=>{
    return a*b;
}

alert(`The factorial of the number ${a}! is ${arr.reduce(fact)}`);
}




