const squaresContainer = document.querySelector('#squares-container');
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++)
{
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < GRID_SIZE; j++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    squaresContainer.appendChild(row);
}