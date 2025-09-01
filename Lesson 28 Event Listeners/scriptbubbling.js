document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation();    // it stops the event bubbling
    alert("child is clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("Childcontainer is clicked")
})
document.querySelector(".container").addEventListener("click", ()=>{
    alert("container is clicked")
})


