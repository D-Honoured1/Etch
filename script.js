// Select DOM elements
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.getElementById('clear');
const resetButton = document.getElementById('reset');
const gridDimensionsDisplay = document.getElementById('grid-dimensions');
const colorPicker = document.getElementById('colorPicker');

// Default settings
let gridSize = 16;
let selectedColor = colorPicker.value;

// Update selectedColor when the color picker changes
colorPicker.addEventListener('input', () => {
    selectedColor = colorPicker.value;
});

// Function to create the grid
function createGrid(size) {
    gridContainer.innerHTML = ''; // Clear previous grid
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridDimensionsDisplay.textContent = `Grid Size: ${size} x ${size}`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.border = '1px solid #ccc';
        cell.style.backgroundColor = 'white';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = selectedColor;
        });
        gridContainer.appendChild(cell);
    }
}

// Clear all cells to white
function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

// Prompt for new grid size and recreate the grid
function resetGrid() {
    let newSize = prompt('Enter new grid size (between 1 and 100):');
    newSize = parseInt(newSize);
    if (newSize >= 1 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else {
        alert('Invalid size. Please enter a number between 1 and 100.');
    }
}

// Event listeners
clearButton.addEventListener('click', clearGrid);
resetButton.addEventListener('click', resetGrid);

// Initialize default grid
createGrid(gridSize);
