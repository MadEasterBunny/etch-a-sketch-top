const container = document.querySelector("#container");

let gridSize = 16;

for(let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares = container.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#000";
    })
})