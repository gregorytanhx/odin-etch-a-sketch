var color = '#D2691E';
var draw = false;

function hoverFunction(event) {
    // changes grid square when mouse hovers over it
    if (draw) {
        event.target.style.background = color;
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

            div.addEventListener('mouseover', hoverFunction);

            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

createGrid(16);
