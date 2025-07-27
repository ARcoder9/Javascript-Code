function BellBoy(name, age, hasWorkPermit, languages) {               // the name should be Captalize. It take inputs that provide when we make a new object from this constructor function.
  this.name = name;                                                   // this.name name says this object name  = input that we provide to the object.
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May i take your suitcase?")
    pickupSuitcase();
    move();
  }
}
 
// Methods --> A method is just a function stored as a property (usually inside an object) and is used to describe the behavior of that object.
// moveSuitcase is a method of the Constructor function Bellboy.
// It behaves just like a normal function but is tied to the object.
// calling a method ----> object.method();

/*Function	                                                      Method
🔹 Standalone hota hai, kisi object se link nahi hota.	      🔹 Function jo object ke andar define hota hai.
🔹 Directly call kar sakte ho.	                              🔹 Object ke through call karna padta hai (object.method()).*/

var Bellboy1 = new BellBoy("david" , 19 , true , ["English"]);  // creating a new object
Bellboy1.moveSuitcase();   // calling a method.