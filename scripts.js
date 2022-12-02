const squaresContainer = document.querySelector('#squares-container');
const gridSizeBtn = document.querySelector('#grid-size-btn');

function getNewGridSize()
{
    const MAX_GRID_SIZE = 100;
    const MIN_GRID_SIZE = 10;

    function isValid(response)
    {
        if (!Number.isInteger(response))
            return false;
        
        if (response < MIN_GRID_SIZE || response > MAX_GRID_SIZE)
            return false;
        
        return true;
    }
    
    let newGridSize;
    do
    {
        newGridSize = +prompt('Enter a new grid size between 10 and 100');
        if (newGridSize && !isValid(newGridSize))
            alert("Invalid grid size");
    }
    while (newGridSize && !isValid(newGridSize))

    if (newGridSize)
    {
        return newGridSize;
    }
    else
    {
        return;
    }
}

function createGrid(gridSize)
{
    const DEFAULT_GRID_SIZE = 100;

    gridSize = gridSize ?? DEFAULT_GRID_SIZE;

    for (let i = 0; i < gridSize; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < gridSize; j++)
        {
            const square = document.createElement('div');
            square.addEventListener('mouseover', function()
            {
                this.classList.add('activated');
            })
            square.classList.add('square');
            row.appendChild(square);
        }
        squaresContainer.appendChild(row);
    }
}

function removeGrid()
{
    let gridElement = squaresContainer.firstChild;

    while (gridElement)
    {
        gridElement.remove();
        gridElement = squaresContainer.firstChild;
    }
}

gridSizeBtn.addEventListener('click', () => {
    removeGrid();
    createGrid(getNewGridSize());
});

createGrid();