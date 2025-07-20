var noofbottles = 99;
var i = 99;
while(i>0){
    var bottleword = "bottles";
    if(i === 1){
    bottleword = "bottle";
    }
    console.log(i + " " + bottleword + " of beer on the wall, " + i + " " + bottleword + " of beer.")
    i--;
    if (i === 0) {
       i = "no more";
    }
    console.log("Take one down and pass it around," + i + " bottles of beer on the wall.")
    
}
