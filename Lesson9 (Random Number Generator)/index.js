var n = Math.random(); // it generate random no. upto 16 decimal place and no. is in between 0 - 0.9999999999999999
console.log(n);

// Dice Roll no.
n = n * 6;      // this give no. between 0 - 5  it is multiply by 6 because upto whatever 
               // range you need a random number just multiply it 
               // with that no. and in dice it is upto 6.
var dice_no = Math.floor(n) + 1;    // Math.floor helps to round-off the no. to nearest whole no. 
                                    // and +1 helps to give no. between 1 - 6 which is completely random.
console.log(dice_no);
