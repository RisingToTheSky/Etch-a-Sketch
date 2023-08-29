const grid = document.getElementById("grid");

/*Create grid*/
function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
            const gridElement = document.createElement("div");
            grid.appendChild(gridElement).className = "gridElement";
    }
}
createGrid();