const container = document.querySelector("#container");
const resizeGridBtn = document.querySelector("#resize-grid-btn");

let gridSize = 16;

const generateGrid = () => {
    container.replaceChildren();

    for(let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    document.documentElement.style.setProperty("--size", gridSize);
}

const colorSquares = (squares) => {
    squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#000";
    })
})
}

generateGrid();

const squares = container.querySelectorAll(".square");
colorSquares(squares);

resizeGridBtn.addEventListener("click", () => {
    const input = prompt("Enter grid size", "");
    gridSize = parseInt(input);

    if(input > 100) {
        alert("Grid size cannot be larger than 100 x 100");
    } else {
        generateGrid();

        const squares = container.querySelectorAll(".square");
        colorSquares(squares);
    }
})