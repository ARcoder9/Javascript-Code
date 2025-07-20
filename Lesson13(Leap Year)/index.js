
var year = prompt("Enter the Year??")

if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 == 0){
            alert("It is a leap year.")
        }
        else{
            alert("It is not a leap year.")
        }
    }
    else{
        alert("It is a leap year.")
    }
}
else{
    alert("It is not a leap year.")
}