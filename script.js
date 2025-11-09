const container = document.querySelector("#container");
const resizeGridBtn = document.querySelector("#resize-grid-btn");
const randomColorsBtn = document.querySelector("#random-colors");
const blackBtn = document.querySelector("#black");

let gridSize = 16;
let blackColor = true;

const randomNum = (num) => {
    return Math.floor(Math.random() * num);
}

const generateGrid = () => {
    container.replaceChildren();

    for(let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    document.documentElement.style.setProperty("--gridSize", gridSize);
}

const colorSquares = (squares) => {
    squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        let r = 0;
        let g = 0;
        let b = 0;
        let currOpacity = parseFloat(window.getComputedStyle(square).getPropertyValue("--alpha"));
        let opacity = Math.min(currOpacity + 0.1, 1);

        if(blackColor) {
            r = 0;
            g = 0;
            b = 0;
            square.style.setProperty("--r", r);
            square.style.setProperty("--g", g);
            square.style.setProperty("--b", b);
        } else {
            r = randomNum(255);
            g = randomNum(255);
            b = randomNum(255);
            square.style.setProperty("--r", r);
            square.style.setProperty("--g", g);
            square.style.setProperty("--b", b);
        }

        square.style.setProperty("--alpha", opacity);
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

blackBtn.addEventListener("click", () => {
    blackColor = true;
})

randomColorsBtn.addEventListener("click", () => {
    blackColor = false;
})