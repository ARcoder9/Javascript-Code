var bellyBoy1Name = "Timmy";          //Bellboy--1
var bellyBoy1Age = 19;
var bellyBoy1HasWorkPermit = true;
var bellyBoy1Languages = ["English", "Spanish"];

var bellyBoy2Name = "Jimmy";           //Bellboy--2
var bellyBoy2Age = 22;
var bellyBoy2HasWorkPermit = true;
var bellyBoy2Languages = ["English", "Spanish"];

var bellyBoy3Name = "Timothy";         //Bellboy--3
var bellyBoy3Age = 25;
var bellyBoy3HasWorkPermit = true;
var bellyBoy3Languages = ["English", "Spanish"];

var bellyBoy4Name = "Kane";            //Bellboy--4
var bellyBoy4Age = 20;
var bellyBoy4HasWorkPermit = true;
var bellyBoy4Languages = ["English", "Spanish"];


var Bellboy1 = {              // Bellboy1 is a name of the object and inside the curly braces
    name: "Timmy",            // there is the property of the object like name , age , language etc.
    age: 19,
    hasWorkPermit: true,
    languages: ["Frendh" , "English"]
}

var houseKeeper1 = {
    YearOfExperience : 12,
    name : "Jane",
    cleaningRepotire : ["bathroom", "lobby", "bedroom"]
}

// Constructor Function

function BellBoy (name, age, hasWorkPermit, languages){       // the name should be Captalize. It take inputs that provide when we make a new object from this constructor function.
    this.name = name;                                         // this.name name says this object name  = input that we provide to the object.
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// initializing the object from the constructor function

var bellboy1 = new BellBoy("Timmy" , 19 , true , ["English" , "French"]);

// constructor function for housekeeper

function Housekeepeer(name , yearofExperience , hasWorkPermit , languages){
    this.name = name;
    this.yearofExperience = yearofExperience;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// initializing the housekeeper object
var houseKeeper1 = new Housekeepeer("juliet" , 12 , true , ["English" , "Spanish"]);