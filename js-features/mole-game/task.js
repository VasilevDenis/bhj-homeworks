const deadElement = document.getElementById('dead');
let deadCounter = Number(deadElement.textContent);

const lostElement = document.getElementById('lost');
let lostCounter = Number(lostElement.textContent);

const holes = document.querySelectorAll(".hole");

function handleGameLogic(hole) {
    if (hole.classList.contains("hole_has-mole")) {
        deadCounter++;
        deadElement.textContent = deadCounter;
        if (deadCounter >= 10) {
            handleWin();
        }
    } else {
        lostCounter++;
        lostElement.textContent = lostCounter;
        if (lostCounter >= 5) {
            handleLose();
        }
    }
}

function handleWin() {
    alert('Вы выиграли!');
    resetGame();
}

function handleLose() {
    alert('Вы проиграли!');
    resetGame();
}

function resetGame() {
    deadCounter = 0;
    deadElement.textContent = deadCounter;
    lostCounter = 0;
    lostElement.textContent = lostCounter;
}

holes.forEach((hole) => {
    hole.addEventListener("click", () => {
        handleGameLogic(hole);
    });
});
