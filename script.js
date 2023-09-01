const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const gridReset = document.getElementById("reset");
const container = document.getElementById("container");
const newGridSize = document.getElementById("changeGridSize");
let gridSize = 16;
createGrid(gridSize);

/*Create grid*/
function createSquare(size) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('gridElement');
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
/*Hovering effect*/
grid.addEventListener("mouseover", function (e){
    if (e.target.matches(".gridElement")){
        e.target.classList.add("active");
    }
});

/*Reset button*/
gridReset.addEventListener("click", () => {
    grid.innerHTML =""
    if (gridSize === 16){
        createGrid(16);
    }else{
        createGrid(gridSize);
    }
});

/*Change grid size button*/
newGridSize.addEventListener("click", () =>{
    grid.innerHTML = ""
    changeGridSize(gridSize);
});

function changeGridSize (gridSize){
    gridSize = parseInt(prompt("Enter a value between 1-100"));
    if (gridSize >= 1 && gridSize <= 100){
        createGrid(gridSize);
    }else{
        alert("Invalid input");
    }
}






