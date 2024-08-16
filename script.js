const villain = document.getElementById('villain');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const gameArea = document.getElementById('game-area');

let score = 0;
let gameInterval;

const villains = [
    'villain1.png', // Replace with the actual file names
    'villain2.png',
    'villain3.png'
];

function getRandomPosition() {
    const x = Math.floor(Math.random() * (gameArea.clientWidth - villain.clientWidth));
    const y = Math.floor(Math.random() * (gameArea.clientHeight - villain.clientHeight));
    return { x, y };
}

function changeVillainImage() {
    const index = Math.floor(score / 5) % villains.length;
    villain.style.backgroundImage = `url(${villains[index]})`;
}

function moveVillain() {
    const position = getRandomPosition();
    villain.style.left = `${position.x}px`;
    villain.style.top = `${position.y}px`;
}

villain.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    changeVillainImage(); // Change image every 5 points
    moveVillain();
});

startButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
    villain.style.display = 'block';
    changeVillainImage(); // Set initial image
    moveVillain();

    gameInterval = setInterval(moveVillain, 1000); // Villain moves every second
    setTimeout(() => {
        clearInterval(gameInterval);
        villain.style.display = 'none';
        alert('Game Over! Your score is: ' + score);
    }, 30000); // Game lasts for 30 seconds
});
