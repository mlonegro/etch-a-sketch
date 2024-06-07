document.addEventListener("DOMContentLoaded", () => {
    makeGrid(16);
});

//Global variables
const cont = document.querySelector(".container");
const changeColor = document.querySelector("#change");
const changeSize = document.querySelector("#changeSize");
const reset = document.querySelector("#reset");

// Get the color of brush
let colorCounter = 0;
let color = "black";
changeColor.addEventListener("click", () => {
    colorCounter++;
    defineColor();
});

function defineColor() {
    if (colorCounter % 2 === 0) {
        color = "black";
    }
    else {
        color = "random";
    }
}



let size;
function promptUser() {
    size = prompt("Choose a size for the grid (max. size = 100)");
    return size;
}

changeSize.addEventListener("click", () => {
    do {
        promptUser();
    }
    while (size > 100);
    makeGrid(size);
    colorCounter = 0;
    defineColor();
});

function makeGrid (size) {
    document.querySelectorAll(".square").forEach(el => el.remove());
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        cont.appendChild(square);
        square.className = "square";
        const width = (496 / (size)) - 1
        square.style.width = width + "px";
        square.style.height = width + "px";
        square.addEventListener("mouseover", colorDiv);
    }
 }
    


function colorDiv() {
    if (mousePressed === true) {
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else{
            this.style.backgroundColor = "black";
        }
    }
}



//Set the color of brush
let mousePressed = false;
document.addEventListener("mousedown", () => {
    mousePressed = true;
});
document.addEventListener("mouseup", () => {
    mousePressed = false;
});


reset.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(el => {
        el.style.backgroundColor = "#f2f2f0";
    });
    colorCounter = 0;
    defineColor();
});