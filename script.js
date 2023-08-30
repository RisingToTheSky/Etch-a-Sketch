const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const gridReset = document.getElementById("reset");
const gridSize = document.getElementById("changeGridSize");
const container = document.getElementById("container");
/*Create grid*/
function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
        const gridElement = document.createElement("div");
        /*Add hovering effect*/
        gridElement.addEventListener("mouseover", ()  =>{
            gridElement.style.cssText = "background-color: black;"
        });
        grid.appendChild(gridElement).className = "gridElement";
        reset.addEventListener("click", () => {
            gridElement.style.cssText = "background-color: white;"
        });
    }
}
createGrid();




function changeGridSize(){

}