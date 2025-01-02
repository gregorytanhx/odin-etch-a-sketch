
function hoverFunction(event) {
    // changes grid square when mouse hovers over it
    event.target.style.background = "blue";
}

function createGrid(size) {
    const container = document.querySelector('.container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('gridSquare');

            div.addEventListener("mouseover", hoverFunction)

            row.appendChild(div);
        }
        container.appendChild(row);       

    }
}

createGrid(16);