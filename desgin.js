const cells = document.querySelectorAll('[data-cell]');
const message = document.querySelector('.message');
let currentPlayer = 'X';

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true });
});

function handleCellClick(event) {
    const cell = event.target;
    cell.textContent = currentPlayer;
    if (checkWin()) {
        message.textContent = `${currentPlayer} Wins!`;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer;
    });
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}
