let boxes = document.querySelectorAll(".box")
setInterval(() => {                        // it runs the function repeatedly by fixed interval of time.
    Array.from(boxes).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
      e.style.Color = getRandomColor();
    });
}, 300);

setTimeout(() => {                         // it runs the function once by the given interval of time
    Array.from(boxes).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
      e.style.Color = getRandomColor();
    });
    
}, 3000);




function getRandomColor(){
    let val1 = Math.ceil(Math.random()*255)
    let val2 = Math.ceil(Math.random()*255)
    let val3 = Math.ceil(Math.random()*255)
    return `rgb(${val1} ${val2} ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.Color = getRandomColor()
})