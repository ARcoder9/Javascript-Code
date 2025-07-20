var output = [];
count = 1;

function fizzbuzz() {
    output.push(output.length + 1);           // method 1 --> this is solution is brain-storm by me
                                              // just add 1 to the length of the array and every time 
                                              // calling the function it add another no. in the series.
    console.log(output)                       // ex.-> [1,2,3,4,........]
}
fizzbuzz();

function fizzbuzz(){                          // method 2
    output.push(count);                       // just add the counter and increment it by 1 
                                              // and pushing each time to the array.
    count = count + 1;
    console.log(output);
}




// fizzbuzz game
// if the no. is divided by 3 replace it with the word "fuzz". 
// and the no. is divided by 5 replace it with the word "buzz".
// and if the no. is divided by 3 and 5 replace it with word "fizzbuzz".

function fizzbuzz(){
    output.push(count);
    if(count%3==0 && count%5==0){
        output.pop();
        output.push("fizzbuzz");
    }
    else if(count%3==0){
        output.pop();
        output.push("fizz");
    }
    else if(count%5==0){
        output.pop();
        output.push("buzz")
    }
    count = count + 1;
    console.log(output)
}