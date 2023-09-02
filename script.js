const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const gridReset = document.getElementById("reset");
const container = document.getElementById("container");
const newGridSize = document.getElementById("changeGridSize");
const colorMode = document.getElementById("color-mode");
const blackMode = document.getElementById("black-mode");
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
/*Hovering effect and color mode*/
grid.addEventListener("mouseover", function (e){
    if (e.target.matches(".gridElement")){
        e.target.style.backgroundColor =  "black";
    }
});

blackMode.addEventListener("click", () => {
    let changeMode = 0;
    if (changeMode === 0){
        grid.addEventListener("mouseover", function (e){
            if (e.target.matches(".gridElement")){
                e.target.style.backgroundColor =  "black";
            }
        });
    }
})


colorMode.addEventListener("click", () => {
    let changeMode = 1;
    if (changeMode === 1){
        grid.addEventListener("mouseover", function (e){
            if (e.target.matches(".gridElement")){
                e.target.style.backgroundColor = randomColor();
            }
        });
    }
});



/*Reset button*/
gridReset.addEventListener("click", () => {
    grid.innerHTML =""
    createGrid(gridSize)
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

/*Change color*/
function randomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber).toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}






