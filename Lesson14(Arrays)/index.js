var name1 = ['arpit','ayush','aryan','aditya','ankit'];   // it is called array
                                                          // array is a collection of item and stored in a same container linearly
console.log(name1.length);               // it gives the length of the array;
console.log(name1);                      // print the array
var myname = console.log(name1[1]);      // input given is the indice at which information is stored.
console.log(name1.includes("ayush"));    // this function checks the given value exists in array or not and gives output in true or false.
name1.push("amit");          // it push the element in the last of the array.
console.log(name1);
name1.pop();                 //it removes the element from last of the array.
console.log(name1);
name1.shift();               // it removes the element from front of the array     "ye pop ka bhai hai"
console.log(name1)
name1.unshift(2)             // it adds the element in front of the array.         "ye push ka bhai hai"
console.log(name1);
name1[0] = 66                // array is mutable but string is immutable.
console.log(name1);
console.log(typeof name1);   // type of array is object
console.log(name1.toString());
delete name1[4];             // it deleted the item but memory will be allocate.
console.log(name1);
var name2 = [3,8,4,6,9]
name2.sort();
console.log(name2)
console.log(name2.slice(1,3));           // ir mean start with index 1 and till index 3 but index 3 element is not included.
name2.reverse();
console.log(name2);

// Loops in Array

var arr = [3,5,7,9,2]
var newArr = []
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((value,index,array)=>{
    console.log(value,index,array);
})

for (const i of arr) {
    console.log(i);
}

// for (let index = 0; index < arr.length; index++) {
//     newArr.push(arr[index]**2);
// }
// console.log(newArr);


// using Map

newArr = arr.map((e , index , array)=>{
    return e ** 2;
})
 
console.log(newArr);


// Reduce function

var arr2 = [1,2,3,4,5]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))

let s = "Ayush";
let d = Array.from(s);           // Make string to an array

console.log(d);


