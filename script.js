

function createGrid(size) {
    const container = document.querySelector('.container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add('gridSquare');
            row.appendChild(div);
        }
        container.appendChild(row);       

    }
}

createGrid(16);