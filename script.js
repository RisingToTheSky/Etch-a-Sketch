const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const gridReset = document.getElementById("reset");
const gridSize = document.getElementById("changeGridSize");
const container = document.getElementById("container");
/*Create grid*/
function createSquare(size) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('box');
    gridElement.style.width = `${size}px`;
    gridElement.style.height = `${size}px`;
  
    return gridElement;
  }

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createSquare(grid.clientWidth / gridSize));
        }
    }
}

gridReset.addEventListener("click", () => {
    grid.innerHTML =""
    defaultGrid();
});




