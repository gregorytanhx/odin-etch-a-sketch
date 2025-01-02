var color = '#D2691E';
var draw = false;
var idTimeout;

function getColor() {
    return document.getElementById("colorpicker").value;
}

function hoverFunction(event) {
    // changes grid square when mouse hovers over it
    if (draw) {
        event.target.style.background = getColor();
    }
}

function mouseDown(event) {
    draw = true;
}

function mouseUp(event) {
    draw = false;
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.addEventListener('mousedown', mouseDown);
    container.addEventListener('mouseup', mouseUp);
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('gridSquare');
            // size of each square depends on grid size
            div.style.width =  String(Math.ceil(600 / size)) + "px";
            div.style.height = String(Math.ceil(600 / size)) + 'px';
            console.log (div.style.width);
            div.addEventListener('mouseover', hoverFunction);
            div.style.background = "white";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function resetGrid(params) {
    let gridSize = document.getElementById('grid-size').value;
    console.log(gridSize);
    const container = document.querySelector('.container');
    container.innerHTML = "";
    createGrid(gridSize);
}

createGrid(16);
const gridButton = document.querySelector(".gridBtn");
gridButton.addEventListener("click", resetGrid);

