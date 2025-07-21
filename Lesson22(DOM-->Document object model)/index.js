document.getElementsByTagName("li")       // it select all the element with the tag name.
                                          // it generates the array of all the elements.

document.getElementsByTagName("li")[2].style.color = "red";     // give index of the array to select particular elements.
var elements = document.getElementsByTagName("li").length       // it give no. of elements of this tag name.
console.log(elements);

document.getElementsByClassName("btn");    // it select the elements by class name.
                                           // it can select more than one element because class name can be same for many elements.
                                           // so it gives the array of all the elements for selecting the particular elements give index.

document.getElementById("heading").style.color = "green";     // it select the elements by id.
                                                              // it select only one item because id is unique for each the elements.

document.getElementById("heading").innerHTML = "GoodBye World";

document.querySelector("li")          // it select the elements of particular name.
document.querySelector(".btn")        // it select the elements by the class name.
document.querySelector("#heading")    // it select the element by the Id name.

document.querySelector("li.item")                // it finds element in the same elements.
document.querySelector("#list a")                // it is a hierarchical selector 
document.querySelector("#list .item")            // it gives single element from this
document.querySelectorAll("#list .item")         // it gives all the element under this id.
document.querySelectorAll("#list .item")[1].style.color = "orange"; 

document.querySelector("li a").style.color = "cyan";

document.querySelector("button").classList;                        // it gives the class list of the element.
document.querySelector("button").classList.add("invisible")        // it adds the class to the element.
document.querySelector("button").classList.remove("invisible")     // it removes the class to the element.

document.querySelector("button").classList.toggle("invisible")     // if the class is implemented then remove it. 
                                                                   // if the class is not implemented then add it.

